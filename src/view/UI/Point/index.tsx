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
  return (
    <Container>
      <Content onClick={() => onPlacemarkClick({ descr, title, coords, id })}>
        <TextContainer>
          <Title>{title}</Title>
          <p>{descr}</p>
        </TextContainer>
        <Close fill="black" onClick={() => onDelete(id)} />
      </Content>
    </Container>
  );
};

export default Point;
