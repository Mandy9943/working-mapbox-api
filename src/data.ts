import {
  artemisaCoords,
  camagueyCoords,
  ciegoAvilaCoords,
  CienfuegosCoords,
  granmaCoords,
  guantanamoCoords,
  habanaCoords,
  holguinCoords,
  matanzasCoords,
  mayabequesaCoords,
  pinarCoords,
  santaClaraCoords,
  santiagoCubaCoords,
  santiSpiritusCoords,
  tunaCoords,
} from "./stringCoods";
import mapboxgl from "mapbox-gl";

/* Types */
export interface IProvince {
  name: string;
  coords: any;
}
export interface IInitialMap {
  lng: number;
  lat: number;
  zoom: number;
}

export interface ILanguage {
  lang: string;
  img: string;
}
interface IMarker {
  color: string;
  markerPosition: [number, number];
  info?: mapboxgl.Popup;
}

export const markers: IMarker[] = [
  {
    color: "red",
    markerPosition: [-77.762835, 21.295129],
    info: new mapboxgl.Popup({ offset: 25 }).setText(
      "Informacion del Marcador 1"
    ),
  },
  {
    color: "blue",
    markerPosition: [-82.33, 23.0],
    info: new mapboxgl.Popup({ offset: 25 }).setText(
      "Informacion del Marcador 2"
    ),
  },
  {
    color: "red",
    markerPosition: [-83.93795, 22.374317],
    info: new mapboxgl.Popup({ offset: 25 }).setText(
      "Informacion del Marcador 3"
    ),
  },
  {
    color: "blue",
    markerPosition: [-76.2, 20.641605],
    info: new mapboxgl.Popup({ offset: 25 }).setText(
      "Informacion del Marcador 4"
    ),
  },
  {
    color: "red",
    markerPosition: [-79.293538, 21.709631],
    info: new mapboxgl.Popup({ offset: 25 }).setText(
      "Informacion del Marcador 5"
    ),
  },
  {
    color: "yellow",
    markerPosition: [-80.438859, 22.508927],
    info: new mapboxgl.Popup({ offset: 25 }).setText(
      "Informacion del Marcador 6"
    ),
  },
];

export const listProvinces: IProvince[] = [
  {
    name: "La Habana",
    coords: [buildCoordinatesArrayFromString(habanaCoords)],
  },
  {
    name: "Pinar del Rio",
    coords: [buildCoordinatesArrayFromString(pinarCoords)],
  },
  {
    name: "Matanzas",
    coords: [buildCoordinatesArrayFromString(matanzasCoords)],
  },
  {
    name: "Artemiza",
    coords: [buildCoordinatesArrayFromString(artemisaCoords)],
  },
  {
    name: "Mayabeque",
    coords: [buildCoordinatesArrayFromString(mayabequesaCoords)],
  },
  {
    name: "Santa Clara",
    coords: [buildCoordinatesArrayFromString(santaClaraCoords)],
  },
  {
    name: "Cienfuegos",
    coords: [buildCoordinatesArrayFromString(CienfuegosCoords)],
  },
  {
    name: "Santi Spititus",
    coords: [buildCoordinatesArrayFromString(santiSpiritusCoords)],
  },
  {
    name: "Ciengo de Avila",
    coords: [buildCoordinatesArrayFromString(ciegoAvilaCoords)],
  },
  {
    name: "Las Tunas",
    coords: [buildCoordinatesArrayFromString(tunaCoords)],
  },
  {
    name: "Granma",
    coords: [buildCoordinatesArrayFromString(granmaCoords)],
  },
  {
    name: "Santiago de Cuba",
    coords: [buildCoordinatesArrayFromString(santiagoCubaCoords)],
  },
  {
    name: "Guantanamo",
    coords: [buildCoordinatesArrayFromString(guantanamoCoords)],
  },
  {
    name: "Holguin",
    coords: [buildCoordinatesArrayFromString(holguinCoords)],
  },
  {
    name: "Camaguey",
    coords: [buildCoordinatesArrayFromString(camagueyCoords)],
  },
];

function buildCoordinatesArrayFromString(MultiGeometryCoordinates: string) {
  var finalData: any = [];
  var grouped = MultiGeometryCoordinates.split(" ");

  grouped.forEach(function (item, i) {
    let a = item.trim().split(",");

    finalData.push([parseFloat(a[0]), parseFloat(a[1])]);
  });

  return finalData;
}
