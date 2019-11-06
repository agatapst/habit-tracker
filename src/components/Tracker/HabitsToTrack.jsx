import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Divider, Switch } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import moment, { locale } from 'moment';
import 'moment/locale/en-gb';
import { DaysOverview } from './DaysOverview';

const useStyles = makeStyles((theme) =>
createStyles({
  habitsList: {
    listStyleType: 'none',
    padding: '0',
    width: '100%',
    height: '485px',
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
  const [currentWeekDays, setCurrentWeekDays] = useState([]);
  const startWeekday = moment().startOf('week').format('DD-MM-YYYY');
  const endWeekday = moment().endOf('week').format('DD-MM-YYYY');
  const month = moment().format('MMMM');

  useEffect(() => {
    locale('en-gb');
    const firstDayOfWeek = moment().startOf('week');
    setCurrentWeekDays([...Array(7)].map((_, i) => moment(firstDayOfWeek).add(i, 'day')));
  }, []);

  const isHabitChecked = (habit) => {
    const today = moment().format('YYYY-MM-DD');
    return habit.trackedDays && habit.trackedDays.includes(today);
  };

  return (
    <Box className={classes.formControl} >
      <Box display="flex" justifyContent="space-between">
        <ul className={classes.habitsList}>
        <div>Week: {startWeekday} - {endWeekday} <button>Set monthly view</button></div>
        <div>Month: {month} <button>Set weekly view</button></div>
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
              </Box>
              <DaysOverview days={currentWeekDays} trackedDays={habit.trackedDays} />
              <Divider />
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};