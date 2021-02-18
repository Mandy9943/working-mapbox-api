import React from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "mapbox-gl";
import "./Map.css";
import { IInitialMap, IProvince, markers } from "../../data";
import ComboBox from "../ComboBox/ComboBox";

interface IProps {
  initialMap: IInitialMap;
  selectedProvince: IProvince | null;
  provinceList: IProvince[];
  setSelectedProvince: (value: IProvince) => void;
  /*   setMapDataOnMove: (lng: number, lat: number, zoom: number) => void;
   */
}

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFuZHk5OTQzIiwiYSI6ImNrbDhlYTVneDFxcW4ydnBldWZvdHowdXEifQ.nMJDubZfW_0qzbpFUwIbhQ";

class Map extends React.Component<IProps> {
  mapContainer: any = React.createRef();
  map: any = null;

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.props.initialMap.lng, this.props.initialMap.lat],
      zoom: this.props.initialMap.zoom,
    });
    console.log("Map ", this.map);

    const map = this.map;

    const coordinates = this.props.selectedProvince
      ? this.props.selectedProvince?.coords
      : [[[]]];

    map.on("load", function () {
      map.addSource("maine", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: coordinates,
          },
          properties: {
            title: "Mapbox DC",
            "marker-symbol": "",
          },
        },
      });

      map.addLayer({
        id: "maine",
        type: "fill",
        source: "maine",
        layout: {},
        paint: {
          "fill-color": "red",
          "fill-opacity": 0.5,
        },
      });
    });

    /* map.on("move", () => {
      const lng = map.getCenter().lng.toFixed(4);
      const lat = map.getCenter().lat.toFixed(4);
      const zoom = map.getZoom().toFixed(2);
      this.props.setMapDataOnMove(lng, lat, zoom);
    }); */

    // create the popup

    // Set options
    markers.forEach((marker) => {
      new mapboxgl.Marker({
        color: marker.color,
        draggable: true,
      })
        .setLngLat(marker.markerPosition)
        .setPopup(marker.info) // sets a popup on this marker
        .addTo(this.map);
    });
  }

  componentDidUpdate() {
    if (this.map.getSource("maine")) {
      this.map.getSource("maine").setData({
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: this.props.selectedProvince
            ? this.props.selectedProvince?.coords
            : [[[]]],
        },
        properties: {
          title: "Mapbox DC",
          "marker-symbol": "",
        },
      });
    }
  }

  render() {
    return (
      <div className="map">
        {/* <div className="sidebarStyle">
          <div>
            Longitude: {this.props.initialMap.lng} | Latitude:{" "}
            {this.props.initialMap.lat} | Zoom: {this.props.initialMap.zoom}
          </div>
        </div> */}
        <div className="autocomplete">
          <ComboBox
            provinces={this.props.provinceList}
            selected={this.props.selectedProvince}
            setSelectedProvince={this.props.setSelectedProvince}
          />
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />{" "}
      </div>
    );
  }
}

export default Map;
