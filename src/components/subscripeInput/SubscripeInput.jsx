import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "./SubscripeInput.css";

const useStyles = makeStyles(theme => ({
    button: {
      margin: "30px 0 0 8px",
    },
    input: {
      display: 'none',
    },
  }));

const SubscripeInput = () => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        id="outlined-email-input"
        label="Subscripe"
        className="email-input"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        /* variant="filled" */
      />
      <Button variant="outlined" size="small" className={classes.button}>
        Subscribe
      </Button>
    </div>
  );
};

export default SubscripeInput;
