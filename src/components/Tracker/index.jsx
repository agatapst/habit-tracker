import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar';
import { HabitsToTrack } from './HabitsToTrack';
import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
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
}),
);

export const Tracker = () => {
  const [habitsList, setHabitsList] = useState([]);

  const classes = useStyles();

    
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
    const today = moment().format('YYYY-MM-DD');
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
      {/* controlled input */}
      <HabitsToTrack habitsList={habitsList} onTrackHabit={handleTrackHabit} />
      <Navbar/>
    </Box> 
  );
};