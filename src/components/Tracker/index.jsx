import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar';
import { HabitsToTrack } from './HabitsToTrack';
import { Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { WeekView } from '../WeekView';
import { Container } from '../Container';

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      height: '600px',
      width: '500px',
      marginTop: '50px',
      background: '#ffffff',
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

  const [currentWeekDays, setCurrentWeekDays] = useState([]);
  const startWeekday = moment().startOf('week').format('DD-MM-YYYY');
  const endWeekday = moment().endOf('week').format('DD-MM-YYYY');
  const month = moment().format('MMMM');

  useEffect(() => {
    const habits = localStorage.getItem('habitsList');
     if(habits) {
       setHabitsList(JSON.parse(habits))
     }
   }, [])

  useEffect(() => {
    localStorage.setItem('habitsList', JSON.stringify(habitsList));
  }, [habitsList]);

  useEffect(() => {
    const firstDayOfWeek = moment().startOf('week');
    setCurrentWeekDays([...Array(7)].map((_, i) => moment(firstDayOfWeek).add(i, 'day')));
  }, []);

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
    <Container>
      <Box display="flex" flexDirection="column">
      <WeekView days={currentWeekDays} />
      {/* <div>Week: {startWeekday} - {endWeekday} <button>Set monthly view</button></div>
      <div>Month: {month} <button>Set weekly view</button></div> */}
      </Box>
      <HabitsToTrack habitsList={habitsList} onTrackHabit={handleTrackHabit} />
      <Navbar/>
    </Container>
  );
};