import React from 'react';
import { render } from '@testing-library/react';
import { InputField } from '.';
import { Formik } from 'formik';

describe('InputField', () => {
  test('renders without error', () => {
    render(
        <Formik>
            <InputField />
        </Formik>
    )
  });
});
