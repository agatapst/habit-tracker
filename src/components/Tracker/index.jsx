import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar';
import { HabitsToTrack } from './HabitsToTrack';
import { Box } from '@material-ui/core';
import moment from 'moment';
import { WeekView } from '../WeekView';
import { Container } from '../Container';
import image from '../../assets/done.png'; 

export const Tracker = () => {
  const [habitsList, setHabitsList] = useState([]);

  const [currentWeekDays, setCurrentWeekDays] = useState([]);

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
      <Box display="flex" flexDirection="column" alignItems="center">
        <img src={image} style={{width: '60%'}} alt="Boy with TODO list" />
      <WeekView days={currentWeekDays} />
      </Box>
      <HabitsToTrack habitsList={habitsList} onTrackHabit={handleTrackHabit} />
      <Navbar/>
    </Container>
  );
};