import React from "react";
import Layouts from "./Components/Layouts/Layouts";
import Map from "./Components/Map/Map";
import { IInitialMap, IProvince, listProvinces, ILanguage } from "./data";

interface IState {
  initialMapView: IInitialMap;
  selectedProvince: IProvince | null;
  provinces: IProvince[];
  lang: ILanguage;
  listLanguages: ILanguage[];
}
const province = listProvinces.filter((p) => p.name === "La Habana")[0];
class App extends React.Component<{}, IState> {
  state = {
    initialMapView: {
      lng: -79.56300001110692,
      lat: 21.464245474907123,
      zoom: 6,
    },
    selectedProvince: province,
    provinces: [...listProvinces],
    lang: {
      lang: "es",
      img: "images/lan_es.png",
    },
    listLanguages: [
      {
        lang: "es",
        img: "images/lan_es.png",
      },
      {
        lang: "en",
        img: "images/lan_en.jpg",
      },
      {
        lang: "fr",
        img: "images/lan_fr.png",
      },
      {
        lang: "it",
        img: "images/lan_it.png",
      },
    ],
  };

  setSelectedProvince = (value: IProvince) => {
    console.log(value);

    this.setState({ selectedProvince: value });
  };
  /* setMapData = (lng: number, lat: number, zoom: number) => {
    const newPosition: IInitialMap = {
      lng,
      lat,
      zoom,
    };
    this.setState({ initialMapView: newPosition });
  }; */

  handleSelectLanguage = (lang: ILanguage) => {
    this.setState({ lang: lang });
  };

  render() {
    return (
      <div className="App">
        <Layouts
          handleSelectLanguage={this.handleSelectLanguage}
          lan={this.state.lang}
          listLangs={this.state.listLanguages}
        >
          <Map
            initialMap={this.state.initialMapView}
            selectedProvince={this.state.selectedProvince}
            provinceList={this.state.provinces}
            setSelectedProvince={this.setSelectedProvince}
            /*             setMapDataOnMove={this.setMapData}
             */
          />
        </Layouts>
      </div>
    );
  }
}

export default App;
