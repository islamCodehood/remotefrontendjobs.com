import React from "react";
import ApplicationBar from "../applicationBar/ApplicationBar";
import { Hidden, Typography, IconButton } from "@material-ui/core";
import HeroImg from "../HeroImg/HeroImg";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css"
import SubscripeInput from "../subscripeInput/SubscripeInput";
const Header = () => {
  return (
    <header>
      {/* <ApplicationBar /> */}
      <HeroImg />
      {/* <SubscripeInput /> */}
    </header>
  );
};

export default Header;
