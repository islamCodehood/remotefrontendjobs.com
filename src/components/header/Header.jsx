import React from "react";
import ApplicationBar from "../applicationBar/ApplicationBar";
import { Hidden, Typography } from "@material-ui/core";
import HeroImg from "../HeroImg/HeroImg";
import "./Header.css"
import SubscripeInput from "../subscripeInput/SubscripeInput";
const Header = () => {
  return (
    <header>
      {/* <ApplicationBar /> */}
      <HeroImg />
      <div className="title-header-wrapper">
        <Typography variant="h1" className="title-header">REMOTE FRONT-END JOBS</Typography>
      </div>
      {/* <SubscripeInput /> */}
    </header>
  );
};

export default Header;
