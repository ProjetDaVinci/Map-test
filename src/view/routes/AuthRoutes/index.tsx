import { useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { AppWrapper } from "../../components";
import LoginPage from "../UserRoutes/LoginPage";
import { LOGIN_ROUTE } from "./routes";
const UserScreen = () => {
  return (
    <Routes>
      <Route path={LOGIN_ROUTE} element={<LoginPage />} />
    </Routes>
  );
};

export default UserScreen;
