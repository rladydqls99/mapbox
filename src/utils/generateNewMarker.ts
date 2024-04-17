import { Map, Marker, Popup } from "mapbox-gl";

export const generateNewMarker = ({
  lat,
  lng,
  map,
}: {
  lat: number;
  lng: number;
  map: Map;
}) => {
  // 팝업이 생기는 모양 정의
  const popUp = new Popup({ closeButton: false, anchor: "left" }).setHTML(
    `<div class='popup'>${lat}, ${lng}</div>`
  );
  new Marker({ color: "#fff", scale: 1.5 })
    // 마커의 위치를 설정
    .setLngLat([lng, lat])
    // 마커에 팝업을 설정
    .setPopup(popUp)
    // 마커를 지도에 추가
    .addTo(map);
};
