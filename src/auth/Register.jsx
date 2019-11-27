import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { InputField } from '../components/InputField';
import { FirebaseContext } from './Firebase';
import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colors } from '../styles/variables';
import image from '../assets/main.png';
import { Link } from 'react-router-dom';
import { route } from '../config/routes';
import { Container } from '../components/Container';
import { CustomButtonBig } from '../components/Button';
import { Card } from '../components/Card';
import { useStyles } from './styles';
import { object } from 'yup';
import { validators } from '../config/validators';

const registerSchema = object().shape({
  name: validators.name,
  email: validators.email
});

export const Register = withRouter(({ history }) => {
  const firebase = useContext(FirebaseContext);
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }}
      validationSchema={registerSchema}
      onSubmit={(values, actions) => {
        const { email, password, name } = values;
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() =>
            // returns promise that's why we can chain .then
            firebase.auth().currentUser.updateProfile({
              displayName: name
            })
          )
          .then(() => {
            history.push('/tracker');
          })
          .catch(error => {
            console.log('Registration error:', error);
          });
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <Box className={classes.main}>
            <Box className={classes.imageBox}>
              <img src={image} className={classes.image} alt="Boy with todo list" />
            </Box>

            <Card>
              <Typography variant="h4" className={classes.title}>
                Track your habits
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                It's hard to shake off a habit since it takes an average of 66 days before a new
                habit takes root in our brain. Make it easier.
              </Typography>

              <InputField
                name="name"
                variant="outlined"
                placeholder="name"
                label="name"
                id="name"
              />
              <InputField name="email" variant="outlined" placeholder="email" label="email" />
              <InputField
                name="password"
                variant="outlined"
                type="password"
                placeholder="password"
                label="password"
                helperText="Password must contain at least 6 characters."
              />
              <InputField
                name="passwordConfirmation"
                variant="outlined"
                type="password"
                placeholder="repeat password"
                label="repeat password"
              />
              <CustomButtonBig type="submit">Register</CustomButtonBig>
              <Typography variant="body2" className={classes.loginBox}>
                If you have an account, please
                <Link className={classes.link} to={route.login()}>
                  LOGIN
                </Link>
              </Typography>
            </Card>
          </Box>
        </Form>
      )}
    </Formik>
  );
});