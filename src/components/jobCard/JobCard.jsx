import React from "react";
//import { makeStyles } from '@material-ui/core/styles';
import './JobCard.css'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  makeStyles
} from "@material-ui/core";
//import { flexbox } from "@material-ui/system";

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
    justifyContent: "center",
    width: "100%",
  },
  techsWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  
}));
const JobCard = (props) => {
  const classes = useStyles();
  const { title, company, techs, date } = props;
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography component="h2" variant="subtitle1" color="textPrimary">
            {title}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
            {company}
        </Typography>
        <div className={classes.techsWrapper}> {
          techs.map(tech => (
            <Typography className="tech" variant="body2">
            {tech}
          </Typography>
          ))
        }
          
        </div>
        <Typography className="period" variant="caption" color="textSecondary">
          3 days
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JobCard;
