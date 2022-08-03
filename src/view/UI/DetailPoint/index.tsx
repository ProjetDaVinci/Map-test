import { useSelector } from "react-redux";
import { selectors } from "../../../redux/ducks";
import { PointsType } from "../../../redux/ducks/points/types";
import { Close } from "../icons";
import { Container, Content, TextContainer, Title } from "./styles";

const DetailPoint = () => {
  const point = useSelector(selectors.detailPoint.SelectPoints);
  return point ? (
    <Container>
      <Content>
        <TextContainer>
          <Title>{point?.title}</Title>
          <p>{point?.descr}</p>
          {point?.coords.map((coords) => (
            <span>{coords}</span>
          ))}
        </TextContainer>
        <Close fill="black" />
      </Content>
    </Container>
  ) : (
    <></>
  );
};

export default DetailPoint;
