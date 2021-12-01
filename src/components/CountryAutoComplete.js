import * as React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { countries } from "../utils/countries";
import { withStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: { marginTop: "0 !important" },
});
const CountryAutoComplete = () => {
  const classes = useStyles();
  return (
    <StyledAutoComplete
      className={classes.root}
      id="country-select-demo"
      fullWidth
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <StyledTextFieldCountry
          {...params}
          label="Choose a country"
          InputLabelProps={{ style: { color: "white" } }}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};
export default CountryAutoComplete;

export const StyledAutoComplete = withStyles((theme) => ({
  root: {
    border: "solid #5f3c2b",
    color: "#6d6d6d",
    marginTop: "20px",
  },
  inputRoot: {
    color: "white",
  },
  paper: {
    backgroundColor: "#001333",
    color: "white",
  },
  popper: {
    color: "white",
  },
}))(Autocomplete);
export const StyledTextFieldCountry = withStyles((theme) => ({
  root: {
    color: "white",
  },
}))(TextField);
