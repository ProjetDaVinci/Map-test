import { useSelector } from "react-redux";
import { selectors } from "../../../redux/ducks";
import { Close } from "../icons";
import { Container, Content, TextContainer, Title } from "./styles";
import { PropsEvent, PropsPoint } from "./types";

const Point = ({
  descr,
  title,
  coords,
  id,
  onDelete,
  onPlacemarkClick,
}: PropsPoint & PropsEvent) => {
  const isToken = useSelector(selectors.auth.SelectToken);

  return (
    <Container>
      <Content onClick={() => onPlacemarkClick({ descr, title, coords, id })}>
        <TextContainer>
          <Title>{title}</Title>
          <p>{descr}</p>
        </TextContainer>
        {isToken ? <Close fill="black" onClick={() => onDelete(id)} /> : <></>}
      </Content>
    </Container>
  );
};

export default Point;
