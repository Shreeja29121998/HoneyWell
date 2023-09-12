import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "250rem",
    width: "250rem",
  },
  welcomeText: {
    fontSize: "45px",
  },
  btnClass: {
    backgroundColor: "red",
    height: "23px",
    marginTop: "25px",
  },
});

const Welcome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/status");
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.welcomeText}>Welcome</Typography>
      <Button className={classes.btnClass} onClick={handleClick}>
        Proceed
      </Button>
    </div>
  );
};

export default Welcome;
