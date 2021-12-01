import * as React from "react";
import { LinearProgress } from "@material-ui/core";

const ProgressBar = ({ value }) => {
  return <LinearProgress variant="determinate" value={value} />;
};

export default ProgressBar;
