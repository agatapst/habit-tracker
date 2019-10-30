import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Divider } from '@material-ui/core';
import { CategoryIcon } from "../CategoryIcon"

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
    <Box display="flex" justifyContent="space-between">
        <ul className={classes.habitsList}>
            {habitsList.map((habit, index) => (
                <li key={index} className={classes.habit}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h6">
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

  );
};