import React from 'react';
import { Field } from 'formik';
import { TextField, Select } from '@material-ui/core';

export function InputField ({
    name,
    label,
    ...props
  }) {
    return (
      <Field
        name={name}
        render={({field}) => {
          return (
              <TextField
                {...props}
                {...field}
                label={label}
              />
          );
        }}
      />
    );
  }

  export function SelectInputField ({
    name,
    label,
    children,
    ...props
  }) {
    return (
      <Field
        name={name}
        render={({field}) => {
  
          return (
              <Select
                label={label}
                {...field}
                {...props}
              >
                {children}
              </Select>
          );
        }}
      />
    );
  }