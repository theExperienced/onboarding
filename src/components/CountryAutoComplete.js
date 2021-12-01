import * as React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { countries } from "../utils/countries";
import { withStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  root: { marginTop: "0 !important" },
});
const CountryAutoComplete = () => {
  const handleChange = (e) => {
    const fieldToUpdate = {
      field: e.target.id,
      value: e.target.value,
    };
    axios
      .put(
        `http://10.0.0.197:3030/api/onboarding/51059234-52b9-11ec-be49-d08e7912923c`,
        fieldToUpdate
      )
      .then((res) => {
        console.log("country res", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const classes = useStyles();
  return (
    <StyledAutoComplete
      className={classes.root}
      id="country-select-demo"
      fullWidth
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      onChange={handleChange}
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
