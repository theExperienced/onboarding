import { createSlice } from "@reduxjs/toolkit";


const fieldIDs = [
    'uuid',
        'cname',
        'oaddress',
        'paddress',
        'url',
        'description',
        'directors',
        'regNumber',
        'country',
        'holders',
];


export const formDataSlice = createSlice({
    name:"formData",
    initialState:{
        uuid:"",
        cname:'',
        oaddress:"",
        paddress:"",
        url:"",
        description:"",
        directors:"",
        regNumber:"",
        country:"",
        holders:"",
        f_certificate:"",
        f_articles:"",
        f_proof:"",
        f_directos:"",
        f_shareholders:"",
        f_source:"",
        f_ownership:"" ,
        f_compliance:"",
        f_statment:"",
        f_proof:"",        
        
       
    }
    ,reducers:{
        updateState:(state, action) => {
             state[action.payload.id] = action.payload.value;
        },
        fileUpload(state,action){
            state[action.payload.id]=action.payload.value;
        },
        uploadFields(state,action){
            state= action.payload;
            console.log("redux state " ,state)
        }
    }
})

export default {formDataSlice};
export const formDataActions = formDataSlice.actions; 



