import React from "react";
import TextField from "@material-ui/core/TextField";
import "./SubscripeInput.css";
const SubscripeInput = () => {
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
        variant="filled"
      />
    </div>
  );
};

export default SubscripeInput;
