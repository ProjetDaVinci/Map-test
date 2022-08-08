import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux";
import { actions, selectors } from "../../../redux/ducks";
import { Point } from "../../UI";
import { MapType } from "../MapComponents/types";
import Modal from "react-modal";

import {
  AlertText,
  Button,
  Container,
  ContainerPoints,
  FlexContainer,
  HeaderContainer,
  RelativeContainer,
  Sidebard,
} from "./styles";
import { useEffect, useState } from "react";
import FormAdd from "../FormAdd";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../routes/UserRoutes/routes";
import { Exit } from "../../UI/icons";

const AppHeader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [setVisible, setIsVisible] = useState(false);
  const isToken = useSelector(selectors.auth.SelectToken);
  const getPoint = useSelector(selectors.setPoint.GetPoints);

  const changeClose = () => {
    setIsVisible(false);
  };

  const signIn = () => {
    navigate(LOGIN_ROUTE);
  };

  const signOut = () => {
    dispatch(actions.auth.signOut());
  };

  const onDelete = (id: number) => {
    dispatch(actions.points.deletePoint(id));
  };

  const points = useSelector(selectors.points.SelectPoints);

  const onPlacemarkClick = (point: MapType) => {
    dispatch(actions.detailPoint.openDesc(point));
  };

  const onAddPoint = () => {
    if (getPoint.coords !== undefined) {
      setIsVisible(!setVisible);
    } else {
      alert("Please select point");
    }
  };

  useEffect(() => {
    if (points.length === 0) {
      dispatch(actions.detailPoint.closeDesc());
    }
  }, []);

  return (
    <HeaderContainer>
      <Sidebard>
        <RelativeContainer>
          <Container>
            {isToken ? (
              <FlexContainer>
                <Button onClick={onAddPoint}>Добавитть</Button>
                <Exit onClick={signOut} fill={"black"} />
              </FlexContainer>
            ) : (
              <>
                <Button onClick={signIn}>Войти</Button>
                <AlertText>
                  Чтобы добавить или удалить точки войдите в систему
                </AlertText>
              </>
            )}
            <ContainerPoints
            // ref={ref}
            >
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
            </ContainerPoints>
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
