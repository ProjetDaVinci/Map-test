import { useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { AppWrapper } from "../../components";
import MapsPage from "./MapsPage";
import { MAPS_ROUTE } from "./routes";
const UserScreen = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path={MAPS_ROUTE} element={<MapsPage />} />
      </Routes>
    </AppWrapper>
  );
};

export default UserScreen;
