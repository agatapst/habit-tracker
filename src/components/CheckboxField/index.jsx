import React from 'react';
import { Field } from 'formik';
import { TextField, Select, InputLabel, Checkbox } from '@material-ui/core';
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
        render={({field}) => {
          return (
            <div className={classes.inputField}>
              <Checkbox
                {...props}
                {...field}
                label={label}
                // checked={ () => console.log('checked')}
              />
            </div>

          );
        }}
      />
    );
  }