import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
createStyles({
  habitsList: {
    listStyleType: 'none',
    padding: '0',
    width: '100%'
  },
  habit: {
    padding: '10px',

    '& button': {
      marginRight: '5px'
    }
  }
}),
);

export const HabitsList = ({habitsList, deleteHabit, editHabit}) => {

const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between">
        <ul className={classes.habitsList}>
            {habitsList.map((habit, index) => (
                <li key={index} className={classes.habit}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4">
                          {habit.title}
                      </Typography>
                      <div>
                      <Button
                          variant="contained"
                          color="primary"
                          onClick={() => editHabit(index)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => deleteHabit(index)}
                        >
                          Delete
                        </Button>
                      </div>
                  </Box>
                    <Typography variant="h6">
                        {habit.description}
                    </Typography>
                    <Typography variant="body2">
                        {habit.repeatMode}
                    </Typography>
                    <Divider />
                </li>
            ))}
        </ul>
    </Box>

  );
};