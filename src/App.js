import { Container, makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import StepperFormComplex from './components/BigForm/StepperFormComplex';
import axios from 'axios';
import { formDataActions } from './components/store/formDataSlice';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
  container: {
    width: '50%',
    backgroundColor: 'white',
  },
});
const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.formData.fullData);
  const classes = useStyles();

  // useEffect(()=>{
  //   axios.all([axios.get('http://10.0.0.197:3030/api/onboarding/289334a4-50f3-11ec-be49-d08e7912923c'),
  //     axios.get('http://10.0.0.197:3030/api/file/289334a4-50f3-11ec-be49-d08e7912923c')])
  //     .then(axios.spread(function(res1,res2){
  //       const textFields = res1.data[0];
  //       const fileFields = {};
  //       res2.data.forEach(file => {
  //         fileFields[file.field_name] = file.file_name;
  //       });
  //      const fullData = {...textFields, ...fileFields};
  //      dispatch(formDataActions.uploadFields(fullData));
  // }))})
  return (
    <Container md={6} className={classes.container}>
      {/* <BigForm /> */}
      <StepperFormComplex />
    </Container>
  );
};

export default App;
