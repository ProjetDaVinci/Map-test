import React from "react";
import { useSelector } from "react-redux";
import UserScreen from "./UserRoutes";
// import {selectors} from '../../redux/ducks';
// import UserScreen from './UserRoutes';
// import AuthScreen from './AuthRoutes';

const Routes = () => {
  //   const isToken = useSelector(selectors.auth.SelectToken);
  return <UserScreen />;
};

export default Routes;
