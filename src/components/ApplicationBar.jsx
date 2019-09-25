import React from "react";
import { AppBar, Typography, Button, IconButton, Toolbar  } from "@material-ui/core";
//import {MenuIcon} from "@material-ui/icons";

const ApplicationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        
        <Typography variant="h6" /* className={classes.title} */>
        R.F.E.J
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
        <IconButton
          edge="start"
          /* className={classes.menuButton} */
          color="inherit"
          aria-label="menu"
        >
          {/* <MenuIcon /> */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;
