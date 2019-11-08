import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import moment, { locale } from 'moment';
import 'moment/locale/en-gb';
import { DaysOverview } from './DaysOverview';
import { CustomCheckbox } from '../Checkbox'
import { MonthCalendar } from '../Calendar';

const useStyles = makeStyles((theme) =>
createStyles({
  habitsList: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
    height: '440px',
    overflow: 'scroll',
    margin: 0
  },
  habit: {
    padding: '15px 0',

    // '& span': {
    //   marginLeft: '-10px',
    // },

    '& button': {
      marginRight: '5px'
    }
  },
}),
);

export const HabitsToTrack = ({habitsList, onTrackHabit}) => {
  const classes = useStyles();
  const [currentWeekDays, setCurrentWeekDays] = useState([]);

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
      <Box display="flex" flexDirection="column">
        <h4 style={{margin: 0}}>HABITS FOR TODAY</h4>
        <ul className={classes.habitsList}>
          {habitsList.map((habit, index) => (
            <li key={index} className={classes.habit}>
              <Box display="flex" alignItems="center" marginLeft='-10px'>
                <CustomCheckbox 
                  checked={isHabitChecked(habit)} 
                  onChange={(e) => onTrackHabit(habit, e.target.checked)}/>
                <Typography variant="body1" align="left">
                  {habit.title}
                </Typography>
              </Box>
              <DaysOverview days={currentWeekDays} trackedDays={habit.trackedDays} />
              <MonthCalendar style={{ display: 'none' }}/>
              {/* <Divider /> */}
            </li>
          ))}
        </ul>
      </Box>
  );
};