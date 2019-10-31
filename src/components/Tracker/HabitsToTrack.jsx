import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Divider, Checkbox } from '@material-ui/core';
import { CategoryIcon } from "../CategoryIcon"
import { CheckboxField } from '../CheckboxField';
import { Formik, Form } from 'formik';

const useStyles = makeStyles((theme) =>
createStyles({
  habitsList: {
    listStyleType: 'none',
    padding: '0',
    width: '100%',
    height: '420px',
    overflow: 'scroll'
  },
  habit: {
    padding: '10px',

    '& button': {
      marginRight: '5px'
    }
  }
}),
);

export const HabitsToTrack = ({habitsList, deleteHabit, onEditButtonClick}) => {

const classes = useStyles();

  return (
    <Formik 
    initialValues={{checkbox: ''}}
    onSubmit={(values, actions) => {
      console.log(values);
    }}
    render={(isSumbitting) => (
      <Form className={classes.formControl} >
        <Box display="flex" justifyContent="space-between">
            <ul className={classes.habitsList}>
                <p>Today</p>
                {habitsList.map((habit, index) => (
                    <li key={index} className={classes.habit}>
                      <Box display="flex" justifyContent="space-between">
                      <div className={classes.formFields}>
                        <CheckboxField
                        id="checkbox"
                        name="checkbox"
                        label="Habit description"
                        />
                      </div>
                        <Typography variant="body1" align="left">
                              {habit.title}
                          </Typography>
                          <div>
                          <CategoryIcon category={habit.category} />
                          </div>
                      </Box>
                        <Divider />
                    </li>
                ))}
            </ul>
        </Box>
  </Form>
  )}
  />
  );
};