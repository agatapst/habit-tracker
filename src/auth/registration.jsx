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
import { CustomButton } from '../components/Button';
import { Card } from '../components/Card';
import { object } from 'yup';

// const registerSchema = object().shape({
//   email: validators.email,
//   password: validators.registerPassword,
// });

const useStyles = makeStyles(theme =>
  createStyles({
    title: {
      margin: '10px 0 5px',
      fontWeight: 600
    },
    subtitle: {
      margin: '5px 0'
    },
    imageBox: {
      display: 'flex',
      justifyContent: 'center',

      [theme.breakpoints.up('md')]: {
        width: '100%'
      }
    },
    image: {
      display: 'none',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      }
    },
    main: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      [theme.breakpoints.up('md')]: {
        margin: 100,
        height: 500
      }
    },
    loginBox: {
      fontSize: 12,
      margin: '10px 0 0'
    }
  })
);

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
      // validationSchema={registerSchema}
      onSubmit={(values, actions) => {
        const { email, password } = values;
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            console.log('Success', user);
            history.push('/tracker');
          })
          .catch(error => {
            console.log('Error', error);
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

              <InputField name="name" variant="outlined" placeholder="name" label="name" />
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
              <CustomButton type="submit">Register</CustomButton>
              <Typography variant="body2" className={classes.loginBox}>
                If you have an account, please LOGIN
              </Typography>
            </Card>
          </Box>
        </Form>
      )}
    </Formik>
  );
});
