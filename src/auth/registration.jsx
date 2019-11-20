
import { Form, Formik } from 'formik';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { InputField } from '../components/InputField'
// import { object } from 'yup';

// const registerSchema = object().shape({
//   email: validators.email,
//   password: validators.registerPassword,
// });

export const Register = withRouter(({ history }) => {

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        // validationSchema={registerSchema}
        onSubmit = { event => {
            const { email, password } = this.state;
            this.props.firebase
              .createUserWithEmailAndPassword(email, password)
              .then(authUser => {
                this.setState({ ...this.initialValues});
              })
              .catch(error => {
                this.setState({ error });
              });
            event.preventDefault();
            console.log(event.target.value)
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
              block
            >
              REGISTER
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
});
