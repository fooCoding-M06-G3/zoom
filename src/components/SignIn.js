import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { Card, CardContent, Button, Typography } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  title: {
    margin: '25px',
    fontSize: '25px',
  },
  submitButton: {
    margin: '40px',
    backgroundColor: '#005b96',
    color: 'white',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#000',
      border: '1px solid #03396c'
    }
  },
  error: {
    marginTop: 20,
    color: 'red'
  },
  card: {
    marginTop: '10vh',
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }

}));

function SignIn() {


  const [values, setValues] = useState({
    email: '',
    password: '',
    error: false,
    id: false
  });

  useEffect(() => {
    values.id && window.location.reload();
  }, [values.id])

  const handleOnChange = event => {

    const { id, value } = event.target;
    let newValues = { ...values, [id]: value };
    setValues(newValues);

  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`/getuser?email=${values.email}&password=${values.password}`)
      .then(res => res.json())
      .then(result => {
        console.log(result[0])

        localStorage.setItem('userId', result[0].userid);
        values.id = true
        setValues({ ...values })

      })
      .catch(err => {
        values.error = true
        setValues({ ...values });
      })
  };

  const classes = useStyles();

  console.log('Farhan >>>>>>', values)
  return (
    localStorage.getItem('userId') !== null ? <Redirect to='/adminpanel' /> :

      <Card className={classes.card} >

        <CardContent style={{
          width: '70%', marginLeft: '15%', marginTop: '5%'
        }}>

          <ValidatorForm className={classes.root} onSubmit={event => handleSubmit(event)} >

            <Typography style={{ marginBottom: 20, fontSize: '1.7em' }}>Sign In </Typography>
            {values.error && <Typography className={classes.error}>Email/Password Invalid</Typography>}
            <TextValidator
              variant='outlined'
              type='email'
              id='email'
              placeholder='Email'
              value={values.email}
              onChange={handleOnChange}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />

            <br />
            <TextValidator
              variant='outlined'
              type='password'
              id='password'
              placeholder='Password'
              value={values.password}
              onChange={handleOnChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />

            <br />
            <Button type="submit" variant="filled outlined" className={classes.submitButton}>
              Sign in
          </Button>
          </ValidatorForm >
        </CardContent >
        <CardContent>
          <Typography>Not registered?</Typography>
          <Link to='signup'>Signup</Link>
        </CardContent>
      </Card>
  );
}

export default SignIn;
