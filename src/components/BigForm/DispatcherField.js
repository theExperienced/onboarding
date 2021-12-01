import { useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import fieldDataSlice from "../store/fileDataSlice";
import { StyledTextField } from "./PseudoForm";
// import useDebounce from '../../hooks/useDebounce';
import debounce from "lodash.debounce";
import { DebounceInput } from "react-debounce-input";
import { makeStyles, TextField } from "@material-ui/core";
import FieldContext from "../../context/fields";

const useStyles = makeStyles({
  root: {
    // borderRadius: "0",
    border: "0px",
    "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-fullWidth.MuiInputBase-formControl":
      {
        // borderRadius: "0",
        border: "0px",
      },
    "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-fullWidth.MuiInputBase-formControl":
      {
        borderRadius: "0",
        // border: "1px solid gray",
      },
  },
});
const DispatcherField = (props) => {
  const { fieldState, setFieldState } = useContext(FieldContext);
  // const ownState = useSelector((state) => state[props.formState[props.id]]);
  // const [isSearching, setIsSearching] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    console.log("dispatcher ownState", props);
  }, [props]);
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    console.log("handling change in dispatcher");
    // e.preventDefault();
    //////redux updat
    const fieldToUpdate = {
      field: e.target.id,
      value: e.target.value,
    };
    console.log("debounce", fieldToUpdate);
    axios
      .put(
        "http://10.0.0.197:3030/api/onboarding/51059234-52b9-11ec-be49-d08e7912923c",
        { fieldToUpdate }
      )
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          setFieldState({ [e.target.id]: e.target.id, ...fieldState });
        }
      })
      .catch((err) => {
        console.log("err", err);
      });

    // try {
    //   await axios.put(
    //     "http://10.0.0.197:3030/api/onboarding/289334a4-50f3-11ec-be49-d08e7912923c",
    //     { fieldToUpdate }
    //   );
    // } catch (err) {
    //   console.log(err);
    // }
    // dispatch(
    //   fieldDataSlice.actions.putFile({
    //     id: props.id,
    //     value: e.target.value,
    //   })
    // );

    // axios.put('randomURLasdasdsadsad', data);
  };

  const debouncedHandleChange = (e) => {
    console.log("e.target", e.target.value);
    debounce(() => handleChange(e), 300);
  };

  return (
    <TextField
      className={classes.root}
      id={props.id}
      // InputLabelProps={{
      //   style: { color: "#1a1616" },
      // }}
      fullWidth
      onChange={debouncedHandleChange}
      label={!props.value ? props.label : ""}
      value={props.value}
      variant="outlined"
    />
  );
};

export default DispatcherField;
