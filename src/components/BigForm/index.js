import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

// const reducerTypes = {
//   PURPOSE: 'PURPOSE',
//   FIRST: 'FIRST',
//   LAST: 'LAST',
//   ORGANIZATION: 'ORGANIZATION',
//   ADDRESS: 'ADDRESS',
//   MESSAGE: 'MESSAGE'
// }


const SimpleForm = () => {

 
const [purpose, setPurpose] = useState();
const [fname, setFname] = useState();
const [lname, setLname] = useState();
const [organiztion, setOrganiztion] = useState();
const [email, setEmail] = useState();
const [msg, setMsg] = useState();
  



const handleSubmit = (e) => {
  e.preventDefault();
  
  const data = {purpose,
    fname,
    lname,
    organiztion,
    email,
    msg
  };

  console.log(data)
  axios.post('http://10.0.0.197/3030/api/onboarding', data)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  });
}






 
 

const handleChange = ({target}) => {
  const {value, id} = target;
  switch(id) {
    case 'purpose':
      setPurpose(value);
      case 'fname':
        setFname(value);
        case 'lname':
          setLname(value);
          case 'organiztion':
            setOrganiztion(value);
            case 'email':
              setEmail(value);
              case 'msg':
                setMsg(value);
    default: return null;
  }
};


    return <>
  
    <Box component="form" onSubmit={handleSubmit}>
    <Grid container justifyContent="center" sx={{display:"flex",flexGrow:"1",marginTop:"100px"}} >
        <Grid 
        direction="column" alignItems = "flex-start" sx = {{display:"flex",marginRight:"20px",color:"white"}}>
          <TextField
          onChange={handleChange}
            id="purpose"
            label="PURPOSE OF INQURY"
            margin="normal"
            sx={{border:"solid 1px grey"}}
            InputLabelProps={{
                style: { color: 'white' },
              }}
              inputProps = {{style:{color:"white"}}}
              // hover
          />
          
          <TextField
          onChange={handleChange}
            id="fname"
            label="FIRST NAME"
            margin="normal"
            sx={{border:"solid 1px grey"}}
            InputLabelProps={{
                style: { color: 'white' },
              }}
              inputProps = {{style:{color:"white"}}}
          />
           <TextField 
           onChange={handleChange}
            id="lname"
            label="LAST NAME"
            margin="normal"
            sx={{border:"solid 1px grey"}}
            InputLabelProps={{
                style: { color: 'white' },
              }}
              inputProps = {{style:{color:"white"}}}
          />
           <TextField
           onChange={handleChange}
            id="organization"
            label="ORGANIZATION"
            margin="normal"
            sx={{border:"solid 1px grey"}}
            InputLabelProps={{
                style: { color: 'white' },
              }}
              inputProps = {{style:{color:"white"}}}
          />
        </Grid>
        <Grid style = {{display:"flex",flexDirection:"column"}}>
          <TextField
          onChange={handleChange}
            id="email"
            label="EMAIL ADDRESS"
            margin="normal"
            sx={{border:"solid 1px grey"}}
            InputLabelProps={{
                style: { color: 'white' },
              }}
              inputProps = {{style:{color:"white"}}}
          />
 
          <TextField
          onChange={handleChange}
          id='msg'
          label="Message"
          multiline
          maxRows={9} 
          label = "MESSAGE"
          rows="9"
          sx={{border:"solid 1px grey"}}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          inputProps = {{style:{color:"white"}}}
          />
          <Button sx={{    
            color: "#f1783f",
            width: "100px",
            border: "solid 3px #f1783f",
            margin: "2px",
            display: "block",
            margintop: "24px",
            marginLeft: "auto"}}
            type='submit'
            >Send</Button>
        </Grid>
      </Grid>
      </Box>
    </>
}
export default SimpleForm;