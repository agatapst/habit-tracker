
import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { InputField } from '../components/InputField'
import { FirebaseContext } from './Firebase'
// import { object } from 'yup';

// const registerSchema = object().shape({
//   email: validators.email,
//   password: validators.registerPassword,
// });

export const Register = withRouter(({ history }) => {
  const firebase = useContext(FirebaseContext);

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        // validationSchema={registerSchema}
        onSubmit = { (values, actions) => {
            const { email, password } = values;
            firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
              console.log("Success", user)
            }).catch((error) => {
              console.log("Error", error)
            });
            // this.props.firebase
            //   .createUserWithEmailAndPassword(email, password)
            //   .then(authUser => {
            //     this.setState({ ...this.initialValues});
            //   })
            //   .catch(error => {
            //     this.setState({ error });
            //   });
            }
        }
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <p>Welcome, let's register</p>
            <p>Description</p>

            <div>
              <InputField
                name="email"
              />

              <InputField
                name="password"
              />
            </div>

            <InputField
              name="passwordConfirmation"
            />

            <button
              type="submit"
            //   disabled={isSubmitting || !isValid}
            >
              REGISTER
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
});
