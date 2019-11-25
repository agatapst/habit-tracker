import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { InputField } from '../components/InputField';
import { FirebaseContext } from './Firebase';
import { Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colors } from '../styles/variables';
import image from '../assets/main.png';
import { Link } from 'react-router-dom';
import { route } from '../config/routes';
import { Container } from '../components/Container';
import { CustomButton } from '../components/Button';
// import { object } from 'yup';

// const registerSchema = object().shape({
//   email: validators.email,
//   password: validators.registerPassword,
// });

const useStyles = makeStyles =>
  createStyles({
    mainContainer: {
      height: '600px',
      width: '400px',
      marginTop: '50px',
      background: '#ffffff',
      border: `1px solid ${colors.mainRed}`,
      borderRadius: '5px',
      padding: '20px',
      position: 'relative'
    }
  });

export const Register = withRouter(({ history }) => {
  const firebase = useContext(FirebaseContext);
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
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
          })
          .catch(error => {
            console.log('Error', error);
          });
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            style={{ margin: 100, height: 500 }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              style={{ height: '100%' }}
            >
              <img src={image} style={{ width: 550 }} alt="Boy with todo list" />
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              style={{ background: 'white', height: '100%', padding: 20 }}
            >
              <h1>Track your habits</h1>
              <p>
                It's hard to shake off a habit since it takes an average of 66 days before a new
                habit takes root in our brain. Make it easier.
              </p>
              <InputField name="email" variant="outlined" placeholder="email" />
              <InputField
                name="password"
                variant="outlined"
                type="password"
                placeholder="password"
              />
              <InputField
                name="passwordConfirmation"
                variant="outlined"
                type="password"
                placeholder="repeat password"
              />
              <CustomButton type="submit">Register</CustomButton>
              <p>If you have an account, please LOGIN</p>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
});
