import React from "react";
//import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  makeStyles
} from "@material-ui/core";
import { flexbox } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    //minWidth: "300px",
    marginBottom: "12px"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  techs: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
}));
const JobCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography component="h2" variant="h6">
          Front-end developer
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Thinkful Inc.
        </Typography>
        <div className={classes.techs}>
          <Typography variant="subtitle2" color="primary">
            html
          </Typography>
          <Typography variant="subtitle2" color="primary">
            css
          </Typography>
          <Typography variant="subtitle2" color="primary">
            javascript
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
