import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { InputField } from '../components/InputField';
import { FirebaseContext } from './Firebase';
import { Box, Typography } from '@material-ui/core';
import image from '../assets/login.png';
import { Link } from 'react-router-dom';
import { route } from '../config/routes';
import { Container } from '../components/Container';
import { CustomButtonBig } from '../components/Button';
import { Card } from '../components/Card';
import { useStyles } from './styles';

export const Login = withRouter(({ history }) => {
  const firebase = useContext(FirebaseContext);
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={values => {
        const { email, password } = values;
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(user => {
            console.log('Success', user);
            history.push('/tracker');
          })
          .catch(error => {
            console.log('Error', error);
          });
      }}
    >
      {() => (
        <Form>
          <Box className={classes.main}>
            <Box className={classes.imageBox}>
              <img src={image} className={classes.image} alt="Boy with todo list" />
            </Box>

            <Card>
              <Typography variant="h4" className={classes.title}>
                LOGIN
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                It's hard to shake off a habit since it takes an average of 66 days before a new
                habit takes root in our brain. Make it easier.
              </Typography>

              <InputField name="email" variant="outlined" placeholder="email" label="email" />
              <InputField
                name="password"
                variant="outlined"
                type="password"
                placeholder="password"
                label="password"
              />
              <CustomButtonBig type="submit">Login</CustomButtonBig>
              <Typography variant="body2" className={classes.loginBox}>
                If you don't have an account, please
                <Link className={classes.link} to={route.signUp()}>
                  REGISTER
                </Link>
              </Typography>
            </Card>
          </Box>
        </Form>
      )}
    </Formik>
  );
});
