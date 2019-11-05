import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar';
import { HabitsToTrack } from './HabitsToTrack';
import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { appConfig } from '../../config/appConfig'
import moment from 'moment';

const useStyles = makeStyles((theme) =>
createStyles({
  mainContainer: {
    height: '600px',
    width: '500px',
    marginTop: '50px',
    background: 'lavender',
    border: '1px solid red',
    borderRadius: '5px',
    padding: '20px',
    position: 'relative'
  },
  todayWeekday: {
    background: 'red'
  }
}),
);

export const Tracker = () => {
  const [habitsList, setHabitsList] = useState([]);

  const classes = useStyles();

  const today = moment().format('YYYY-MM-DD');
  const weekdays = moment.weekdays()

  const isTodayWeekday = (weekday) => {
    const todayWeekday = moment().format('dddd');
    return weekday === todayWeekday
  }

  useEffect(() => {
    const habits = localStorage.getItem('habitsList');
     if(habits) {
       setHabitsList(JSON.parse(habits))
     }
   }, [])

  useEffect(() => {
    localStorage.setItem('habitsList', JSON.stringify(habitsList));
  }, [habitsList]);

  const handleTrackHabit = (trackedHabit, isTracked) => {
    const trackedDays = new Set(trackedHabit.trackedDays);
    isTracked ? trackedDays.add(today) : trackedDays.delete(today);

    setHabitsList(habitsList.map(habit => 
      habit.id === trackedHabit.id ? 
        {...trackedHabit, trackedDays: [...trackedDays]} : 
        habit
    ))
  }

  return (
    <Box className={classes.mainContainer}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3">
          Track your habits
        </Typography>
      </Box>
      <div>Today is: {today}</div>
      <div>
        Weekdays abbreviations are: { appConfig.weekdaysMin.map((weekday, index) => (
        <span key={index}>{weekday}</span>
      ))}
      </div>
      <div>
          <ul>
            {weekdays.map((weekday, index) => (
              <li key={index} style={{color: isTodayWeekday(weekday) ? 'red' : 'black'}}>{weekday}</li>
            ))}
          </ul>
      </div>
      <HabitsToTrack habitsList={habitsList} onTrackHabit={handleTrackHabit} />
      <Navbar/>
    </Box> 
  );
};