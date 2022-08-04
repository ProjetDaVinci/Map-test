import { FC } from "react";
import { AppWrapper, MapComponents } from "../../../components";
import { Container } from "./styles";

const MapsPage: FC = () => {
  return (
    <AppWrapper>
      <Container>
        <MapComponents />
      </Container>
    </AppWrapper>
  );
};

export default MapsPage;
