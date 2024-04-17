import { useRef } from "react";
import { useMap } from "../hooks/useMap";

export const MapView = () => {
  // 렌더링될 div 요소를 참조하기 위한 ref
  const mapRef = useRef<HTMLDivElement>(null);
  useMap(mapRef);

  return (
    <>
      <div ref={mapRef} className="map"></div>
    </>
  );
};

// geoJson Layer를 추가할 때는 source를 정의하지 않아도 됨
// addSource와 addLayer애서 source를 정의하는 것은 같은 방식
