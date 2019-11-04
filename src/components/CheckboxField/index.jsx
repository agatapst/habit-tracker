import React from 'react';
import { Field } from 'formik';
import { Checkbox } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
createStyles({
  inputField: {
    margin: 10,
  }
}),
);

export const CheckboxField = ({
    name,
    label,
    value,
    ...props
  }) => {
  
    const classes = useStyles();

    return (
      <Field
        name={name}
        render={({field: { value, ...field }}) => {
          return (
            <div className={classes.inputField}>
              <Checkbox
                {...field}
                {...props}
                label={label}
                checked={value}
                onChange={() => console.log(value)}
              />
            </div>
          );
        }}
      />
    );
  }