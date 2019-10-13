import React from "react";
//import { makeStyles } from '@material-ui/core/styles';
import "./JobCard.css";
import {
  Card,
  CardContent,
  /* CardActions, */
  Typography,
  makeStyles,
  Link
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginBottom: "24px",
    backgroundColor: "#e5eaef",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%"
  },
  techsWrapper: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center"
  }
}));
const JobCard = props => {
  const classes = useStyles();
  const { title, company, techs, date, link, jobReqs, id } = props;
  const todayDate = new Date()
  const publishDate = new Date(date)
  const dateDifference = Math.abs(todayDate - publishDate)
  const dayNumbers = Math.ceil(dateDifference / (60 * 60 * 24 * 1000))

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography
          component="h2"
          variant="subtitle1"
          color="textPrimary"
          align="left"
        >
          <Link
            href={link}
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            {title}
          </Link>
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {company}
        </Typography>
        {/* <Typography variant="subtitle2" color="textSecondary">{jobType}</Typography>
        <Typography variant="subtitle2" color="textSecondary">{experience}</Typography> */}
        <div className={classes.techsWrapper}>
          {techs.map(tech => (
            <Typography className="tech" variant="body2">
              {tech}
            </Typography>
          ))}
        </div>
        <Typography className="period" variant="caption" color="textSecondary">
          {dayNumbers} day(s)
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JobCard;
