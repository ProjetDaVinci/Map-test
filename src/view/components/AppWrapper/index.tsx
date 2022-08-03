import React, { FC } from "react";
import AppHeader from "../AppHeader";
import { Container } from "./styles";
import { WrapperType } from "./types";

const AppWrapper: FC<WrapperType> = ({ children }) => {
  return (
    <Container>
      <AppHeader />
      {children}
    </Container>
  );
};

export default AppWrapper;
