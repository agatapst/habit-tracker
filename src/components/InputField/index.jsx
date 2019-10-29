import React from 'react';
import { Field } from 'formik';
import { TextField, Select, InputLabel } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
createStyles({
  inputField: {
    margin: 10,

    '& > *': {
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
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Select
              label={label}
              id={name}
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

  export const IconsSelectField = ({
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
            <InputLabel htmlFor={name}>{label}</InputLabel>
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