import { useEffect, useRef } from "react";
import { initMap } from "../utils/initMap";
import { Map } from "mapbox-gl";
import { generateNewMarker } from "../utils/generateNewMarker";

export const useMap = (container: React.RefObject<HTMLDivElement>) => {
  const mapInitRef = useRef<Map | null>(null);

  useEffect(() => {
    if (container.current) {
      mapInitRef.current = initMap(container.current, [37.6173, 55.7558]);
    }
  }, []);

  // 초기 위치 마커 표시
  useEffect(() => {
    mapInitRef.current &&
      mapInitRef.current.on("load", () => {
        generateNewMarker({
          map: mapInitRef.current!,
          ...mapInitRef.current!.getCenter(),
        });
      });

    return () => {
      mapInitRef.current?.off("load", generateNewMarker);
    };
  }, []);

  // 더블클릭 이벤트 핸들러
  useEffect(() => {
    mapInitRef.current?.on("dblclick", ({ lngLat }) => {
      generateNewMarker({
        map: mapInitRef.current!,
        ...lngLat,
      });
    });

    return () => {
      mapInitRef.current?.off("dblclick", generateNewMarker);
    };
  }, []);
};
