import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux";
import { actions, selectors } from "../../../redux/ducks";
import { Point } from "../../UI";
import { MapType } from "../MapComponents/types";
import Modal from "react-modal";

import {
  Button,
  Container,
  HeaderContainer,
  RelativeContainer,
  Sidebard,
} from "./styles";
import { useState } from "react";
import FormAdd from "../FormAdd";

const AppHeader = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [setVisible, setIsVisible] = useState(false);
  const getCoords = useSelector(selectors.setPoint.SelectPoints);

  const changeClose = () => {
    setIsVisible(false);
  };

  const onDelete = (id: number) => {
    dispatch(actions.points.deletePoint(id));
  };

  // const {width} = useWindowDimensions();
  const points = useSelector(selectors.points.SelectPoints);

  const onPlacemarkClick = (point: MapType) => {
    dispatch(actions.detailPoint.openDesc(point));
    // dispatch(actions.detailPoint.closeDesc(point.id));
  };

  return (
    <HeaderContainer>
      <Sidebard>
        <RelativeContainer>
          <Container>
            <Button onClick={() => setIsVisible(!setVisible)}>Добавитть</Button>

            {points.map((point, key) => (
              <Point
                descr={point.descr}
                title={point.title}
                key={key}
                coords={point.coords}
                id={point.id}
                onDelete={onDelete}
                onPlacemarkClick={onPlacemarkClick}
              />
            ))}
          </Container>
        </RelativeContainer>
      </Sidebard>
      <Modal
        isOpen={setVisible}
        style={{
          content: {
            zIndex: 999999999999,
            maxWidth: 500,
            margin: "0 auto",
            padding: 20,
            // minHeight: "55%",
            // height: "fit-content",
          },
        }}
        ariaHideApp={false}
        // className={styles.overlay}
        overlayClassName="Overlay"
        shouldCloseOnEsc
        contentLabel="onRequestClose Example"
        shouldCloseOnOverlayClick={true}
        onRequestClose={changeClose}
        // key={cardId}
      >
        <FormAdd setIsVisible={setIsVisible} />
      </Modal>
    </HeaderContainer>
  );
};

export default AppHeader;
