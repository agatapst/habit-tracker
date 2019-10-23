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
        render={({
          field: { value, onChange: handleChange, ...field },
          form
        }) => {
  
          return (
              <TextField
                {...props}
                {...field}
                value={value}
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
        render={({
          field: { value, onChange: handleChange, ...field },
          form
        }) => {
  
          return (
              <Select
                {...props}
                {...field}
                value={value}
                label={label}
              >
                {children}
              </Select>
          );
        }}
      />
    );
  }