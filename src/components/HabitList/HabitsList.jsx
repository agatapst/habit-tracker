import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
createStyles({
  habitsList: {
    listStyleType: 'none'
  },
}),
);

export const HabitsList = ({habitsList}) => {

const classes = useStyles();

  return (
    <ul className={classes.habitsList}>
        {habitsList.map((habit, index) => (
            <li key={index}>
                <Typography variant="h3">
                    {habit.title}
                </Typography>
                <p>
                    {habit.description}
                </p>
                <p>
                    {habit.repeatMode}
                </p>
            </li>
        ))}
    </ul>
  );
};