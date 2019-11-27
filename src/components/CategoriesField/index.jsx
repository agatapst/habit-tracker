import React from 'react';
import { Field } from 'formik';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { CategoryIcon, categoriesList } from '../CategoryIcon';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme =>
  createStyles({
    inputField: {
      margin: '16px 0',
      width: '100%',

      '& > *': {
        width: '100%'
      }
    }
  })
);

export const CategoriesField = ({ name, label, value, tooltip, ...props }) => {
  const classes = useStyles();

  return (
    <Field
      name={name}
      render={({ field }) => {
        return (
          <div className={classes.inputField}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Category</FormLabel>
              <RadioGroup
                aria-label="icons"
                name="icons"
                className={classes.group}
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                {...field}
              >
                {categoriesList.map(category => (
                  <Tooltip key={category} title={category}>
                    <FormControlLabel
                      style={{ marginRight: 0 }}
                      key={category}
                      value={category}
                      control={
                        <Radio
                          icon={<CategoryIcon category={category} />}
                          checkedIcon={<CategoryIcon category={category} />}
                        />
                      }
                    />
                  </Tooltip>
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        );
      }}
    />
  );
};
