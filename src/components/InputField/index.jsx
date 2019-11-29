import React from 'react';
import { Field } from 'formik';
import { TextField, Select, InputLabel } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { getFormikErrors } from '../../utils/getFormikErrors';
import { space } from '../../styles/helpers';

const useStyles = makeStyles(() =>
  createStyles({
    inputField: {
      margin: `${space(3)}px 0`,
      width: '100%',

      '& > *': {
        width: '100%'
      }
    }
  })
);

export const InputField = ({ name, label, ...props }) => {
  const classes = useStyles();

  return (
    <Field
      name={name}
      render={({ field, form }) => {
        const { errorId, hasError } = getFormikErrors(name, form);
        return (
          <div className={classes.inputField}>
            <TextField {...props} {...field} label={label} error={hasError} helperText={errorId} />
          </div>
        );
      }}
    />
  );
};

export const SelectInputField = ({ name, label, children, ...props }) => {
  const classes = useStyles();
  return (
    <Field
      name={name}
      render={({ field }) => {
        return (
          <div className={classes.inputField}>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Select label={label} id={name} {...field} {...props}>
              {children}
            </Select>
          </div>
        );
      }}
    />
  );
};

export const IconsSelectField = ({ name, label, children, ...props }) => {
  const classes = useStyles();
  return (
    <Field
      name={name}
      render={({ field }) => {
        return (
          <div className={classes.inputField}>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <TextField {...props} {...field} label={label} />
          </div>
        );
      }}
    />
  );
};
