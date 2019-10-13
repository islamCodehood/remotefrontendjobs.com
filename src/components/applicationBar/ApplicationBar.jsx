import React from "react";
import { AppBar, Typography, Button, IconButton, Toolbar  } from "@material-ui/core";
//import MenuIcon from "@material-ui/icons/Menu";
import "./ApplicationBar.css"

const ApplicationBar = () => {

  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Typography variant="h6" className="title">
          R.F.E.J
          </Typography>
          <IconButton
            edge="start"
            className="menuButton" 
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ApplicationBar;
