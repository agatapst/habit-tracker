import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import moment, { locale } from 'moment';
import 'moment/locale/en-gb';
import { DaysOverview } from './DaysOverview';
import { CustomCheckbox } from '../Checkbox'
import { MonthCalendar } from '../Calendar';
import { CustomButton } from '../Button';


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

  },
}),
);

export const HabitsToTrack = ({habitsList, onTrackHabit}) => {
  const classes = useStyles();
  const [currentWeekDays, setCurrentWeekDays] = useState([]);
  const [isMonthlyView, setMonthlyView] = useState(false)

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
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <h4 style={{margin: 0}}>HABITS FOR TODAY</h4>
          <CustomButton onClick={() => setMonthlyView(!isMonthlyView)}>{isMonthlyView ? 'Set weekly view' : 'Set montly view'}</CustomButton>
        </Box>
        <ul className={classes.habitsList}>
          {habitsList.map((habit, index) => (
            <li key={index} className={classes.habit}>
              <Box display="flex" alignItems="center" >
                <CustomCheckbox 
                  checked={isHabitChecked(habit)} 
                  onChange={(e) => onTrackHabit(habit, e.target.checked)}/>
                <Typography variant="body1" align="left">
                  {habit.title}
                </Typography>
              </Box>
              { isMonthlyView 
              ? <MonthCalendar trackedDays={habit.trackedDays}/> 
              :  <DaysOverview days={currentWeekDays} trackedDays={habit.trackedDays} />
              } 
              {/* // <DaysOverview days={currentWeekDays} trackedDays={habit.trackedDays} />
              // <MonthCalendar /> */}
              {/* <Divider /> */}
            </li>
          ))}
        </ul>
      </Box>
  );
};