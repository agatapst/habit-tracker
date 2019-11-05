import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Divider } from '@material-ui/core';
// import { CategoryIcon } from "../CategoryIcon"
import { Checkbox } from '@material-ui/core';
import moment from 'moment';

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

export const HabitsToTrack = ({habitsList, onTrackHabit}) => {

  const classes = useStyles();

  const isHabitChecked = (habit) => {
    const today = moment().format('YYYY-MM-DD');
    return habit.trackedDays && habit.trackedDays.includes(today);
  };

  return (
    <Box className={classes.formControl} >
      <Box display="flex" justifyContent="space-between">
          <ul className={classes.habitsList}>
              {habitsList.map((habit, index) => (
                  <li key={index} className={classes.habit}>
                    <Box display="flex" alignItems="center">
                    <div className={classes.formFields}>
                      <Checkbox 
                        checked={isHabitChecked(habit)} 
                        onChange={(e) => onTrackHabit(habit, e.target.checked)}/>
                    </div>
                      <Typography variant="body1" align="left">
                            {habit.title}
                        </Typography>
                        {/* <div>
                        <CategoryIcon category={habit.category} />
                        </div> */}
                    </Box>
                      <Divider />
                  </li>
              ))}
          </ul>
        </Box>
      </Box>
  );
};