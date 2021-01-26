import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      //width: 200,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function UserProfile() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address1, setAddr1] = useState("");
    const [address2, setAddr2] = useState("");
    const [city, setCity] = useState("");
    const [age, setAge] = React.useState('');
    const [gender, setGender] = React.useState('female');
    const [education, setEducation] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedValues: []
    });
    // const [errormessage, setErrorMessage] = React.useState({});


    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(
        `
        First Name: ${firstname} 
        Last Name: ${lastname}
        Email: ${email}
        Address1: ${address1}
        Address2: ${address2}
        City: ${city}
        age: ${age}
        gender: ${gender}
        education: ${education}
        `);
    }

    const handleChangeCheckBox = (event) => {
    setEducation({ ...education, 
        [event.target.name]: event.target.checked,
        checkedValues:event.target.value,
        });
    };

    const handleChangeRadio = (event) => {
    setGender(event.target.value);
    };

    const handleChangeSelect = (event) => {
        setAge(event.target.value);
    };

    const classes = useStyles();
    return  (
        <ValidatorForm  onSubmit={handleSubmit} autoComplete="off">
    <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextValidator
            id="First-Name"
            label="First Name"
            type="text"
            autoComplete="First-Name"
            variant="filled"
            onChange={e => setFirstName(e.target.value)}
            validators={['required']}
            errorMessages={['this field is required']}
            />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextValidator
            id="Last-Name"
            label="Last Name"
            type="text"
            autoComplete="LastName"
            variant="filled"
            onChange={e => setLastName(e.target.value)}
            validators={['required']}
            errorMessages={['this field is required']}
            />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextValidator
            id="Email"
            label="Email"
            type="text"
            autoComplete="current-email"
            variant="filled"
            onChange={e => setEmail(e.target.value)}
            validators={['required']}
            errorMessages={['this field is required']}
            />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextValidator
            id="Address1"
            label="Address 1"
            type="text"
            autoComplete="Address1"
            variant="filled"
            onChange={e => setAddr1(e.target.value)}
            validators={['required']}
            errorMessages={['this field is required']}
            />
        </Grid>
        <Grid item xs={6} sm={4}>
         <TextValidator
            id="Address2"
            label="Address 2"
            type="text"
            autoComplete="Address2"
            variant="filled"
            onChange={e => setAddr2(e.target.value)}
            validators={['required']}
            errorMessages={['this field is required']}
            />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextValidator
            id="city"
            label="City"
            type="text"
            autoComplete="current-City"
            variant="filled"
            onChange={e => setCity(e.target.value)}
            validators={['required']}
            errorMessages={['this field is required']}
            />
        </Grid>
        <Grid item xs={6} sm={4}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChangeSelect}
            >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={6} sm={4}>
        <FormControl className={classes.formControl}>
        <FormLabel component="legend">Education</FormLabel>
              <FormControlLabel
                control={
                <Checkbox
                    checked={education.checkedA}
                    onChange={handleChangeCheckBox}
                    name="checkedA"
                    color="primary"
                    value="graduate"
                />
                }
                label="Graduate"
                />
                <FormControlLabel
                control={
                <Checkbox
                    checked={education.checkedB}
                    onChange={handleChangeCheckBox}
                    name="checkedB"
                    color="primary"
                    value="undergraduate"
                />
                }
                label="Under Graduate"
                />
            </FormControl>
        </Grid>
        <Grid item xs={6} sm={4}>
          <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleChangeRadio}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </Grid>
      </Grid>
          <Button type="submit" variant="contained" color="primary">
            Primary
          </Button>
       </ValidatorForm>
      );
  }

export default UserProfile;