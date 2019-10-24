import React from 'react';
import { Field } from 'formik';
import { TextField, Select } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
createStyles({
  inputField: {
    margin: 10,

    '& *': {
      width: '100%',
    }
  }
}),
);

export const InputField = ({
    name,
    label,
    ...props
  }) => {
  
    const classes = useStyles();

    return (
      <Field
        name={name}
        render={({field}) => {
          return (
            <div className={classes.inputField}>
              <TextField
                {...props}
                {...field}
                label={label}
              />
            </div>

          );
        }}
      />
    );
  }

  export const SelectInputField = ({
    name,
    label,
    children,
    ...props
  }) => {
  const classes = useStyles();
    return (
      <Field
        name={name}
        render={({field}) => {
  
          return (
          <div className={classes.inputField}>
            <Select
              label={label}
              {...field}
              {...props}
            >
              {children}
            </Select>
          </div>

          );
        }}
      />
    );
  }