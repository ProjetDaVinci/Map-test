import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import { useMemo, useState } from "react";
import { MapType } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../../redux/ducks";
import { AppDispatch } from "../../../redux";
const mapState = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

const MapComponents = () => {
  const dispatch = useDispatch<AppDispatch>();
  const points = useSelector(selectors.points.SelectPoints);

  const [isLoaded, setIsLoading] = useState(true);

  const getPoint = useSelector(selectors.setPoint.GetPoints);

  const memoPoints = useMemo(() => points, [points]);
  const pointsSelect = useSelector(selectors.detailPoint.SelectPoints);

  const onPlacemarkClick = (point: MapType) => {
    dispatch(actions.detailPoint.openDesc(point));
  };

  const onClickMap = (point: any) => {
    const coords = point.get("coords");
    dispatch(actions.setPoint.changePoint({ coords }));
  };

  return isLoaded ? (
    <>
      <YMaps>
        <Map
          state={mapState}
          width={"100%"}
          height={"100%"}
          // onApiAvaliable={(ymaps: any) => console.log(ymaps)}
          onLoad={(ymaps: any) => {
            setIsLoading(true);
          }}
          // instanceRef={(inst) => console.log(inst)}
          onClick={onClickMap}
          apikey="https://api-maps.yandex.ru/2.1?apikey=b69e3030-c086-4573-8ec5-975724b21a7b"
          query={{
            apikey: "b69e3030-c086-4573-8ec5-975724b21a7b",
          }}
          modules={["templateLayoutFactory", "layout.ImageWithContent"]}
        >
          {memoPoints.map((point, index) => (
            <Placemark
              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              key={index}
              geometry={point.coords}
              onClick={() => onPlacemarkClick(point)}
              properties={{
                item: pointsSelect.id,
                balloonContentHeader: pointsSelect.title,
                balloonContentBody: pointsSelect.descr,
                balloonContentFooter: pointsSelect.coords,
              }}
              options={{
                iconColor: pointsSelect?.id === point.id ? "red" : undefined,
                balloonPanelMaxMapArea: Infinity,
              }}
            />
          ))}
          {getPoint.coords !== undefined && (
            <Placemark
              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              geometry={getPoint.coords}
              options={{
                iconColor: "green ",
              }}
            />
          )}
        </Map>
      </YMaps>
    </>
  ) : (
    <>Loading.....</>
  );
};

export default MapComponents;
