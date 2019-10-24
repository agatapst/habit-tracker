import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
createStyles({
  habitsList: {
    listStyleType: 'none',
    padding: '0'
  },
}),
);

export const HabitsList = ({habitsList}) => {

const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between">
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
                    <button>Delete</button>
                    <button>Edit</button>
                </li>
            ))}
        </ul>
    </Box>

  );
};