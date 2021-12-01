import { configureStore } from "@reduxjs/toolkit";
import formDataReducer, { formDataSlice } from "./formDataSlice";

const store = configureStore({
    reducer:{formData:formDataSlice.reducer}
})

export default store;