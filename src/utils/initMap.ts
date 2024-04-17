// 맵을 초기화 하는 함수
import { Map } from "mapbox-gl";

export const initMap = (
  container: HTMLDivElement,
  coords: [number, number]
) => {
  return new Map({
    container,
    style: "mapbox://styles/mapbox/streets-v11",
    center: coords,
    pitchWithRotate: false,
    zoom: 12,
    accessToken: "asdsadasdasdas",
    doubleClickZoom: false,
  });
};
