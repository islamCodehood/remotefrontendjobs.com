import React from "react";
import ApplicationBar from "../applicationBar/ApplicationBar";
import { Hidden, Typography } from "@material-ui/core";
import HeroImg from "../HeroImg/HeroImg";
import "./Header.css"
const Header = () => {
  return (
    <header>
      <ApplicationBar />
      <HeroImg />
      <Typography variant="subtitle1" className="title-header">REMOTE FRONT-END JOBS</Typography>
    </header>
  );
};

export default Header;
