import { YMaps, Map, Clusterer, Placemark } from "@pbe/react-yandex-maps";

import { useEffect, useRef, useState } from "react";
import { MapType, NewPoint } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../../redux/ducks";
import { RouteButton } from "react-yandex-maps";
import { AppDispatch } from "../../../redux";

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

const MapComponents = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isLoaded, setIsLoading] = useState(true);

  const [newPoint, setNewPoint] = useState<NewPoint | null>(null);

  const mapRef = useRef(undefined);

  const points = useSelector(selectors.points.SelectPoints);
  const pointsSelect = useSelector(selectors.detailPoint.SelectPoints);

  const onPlacemarkClick = (point: MapType) => {
    dispatch(actions.detailPoint.openDesc(point));
  };

  const onOpenDesc = (point: MapType) => {
    console.log("открыть2");
  };

  const closeDescription = () => {
    console.log("закрыть");
  };

  // useEffect(() => {}, [pointsSelect]);

  const onClickMap = (point: any) => {
    const coords = point.get("coords");
    setNewPoint(coords);
    dispatch(actions.setPoint.changePoint({ coords }));
  };

  return isLoaded ? (
    <>
      <YMaps>
        <Map
          defaultState={mapState}
          width={"100%"}
          height={"100%"}
          // onApiAvaliable={(ymaps: any) => console.log(ymaps)}
          onLoad={(ymaps: any) => {
            setIsLoading(true);
          }}
          // instanceRef={(inst) => console.log(inst)}
          onClick={onClickMap}

          // query={{
          //   apikey: 'my_api_key',
          // }}
        >
          <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
              balloonPanelMaxMapArea: Infinity,
            }}
            onBalloonclose={closeDescription}
          >
            {points.map((point, index) => (
              <Placemark
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                key={index}
                geometry={point.coords}
                onClick={() => onPlacemarkClick(point)}
                properties={{
                  item: pointsSelect.id,
                  balloonContentHeader: pointsSelect.title,
                  balloonContentBody: pointsSelect.descr,
                  balloonContentFooter:
                    !pointsSelect || pointsSelect?.id !== point.id ? (
                      <input
                        type="button"
                        onClick={() => onOpenDesc(point)}
                        value="Подробнее.."
                      />
                    ) : (
                      <div>привет{pointsSelect.descr}</div>
                    ),
                }}
                options={{
                  balloonPanelMaxMapArea: Infinity,
                }}
              />
            ))}
            {newPoint ? (
              <Placemark
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                geometry={newPoint}
                // onClick={() => onPlacemarkClick(point)}
              />
            ) : (
              <></>
            )}
          </Clusterer>
        </Map>
      </YMaps>
    </>
  ) : (
    <>Loading.....</>
  );
};

export default MapComponents;
