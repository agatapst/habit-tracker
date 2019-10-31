import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar';
import { HabitsToTrack } from './HabitsToTrack';
import { CheckboxField } from '../CheckboxField';
import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

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
  const [filteredHabitsList, setFilteredHabitsList] = useState([])
  const [query, setQuery] = useState('');

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

  // if something needs to change based on change of other props & states -> useEffect
  useEffect(() => {
    const filteredHabits = habitsList.filter((habit) => {
      return habit.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredHabitsList(filteredHabits);
  }, [habitsList, query])

  return (
    <Box className={classes.mainContainer}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3">
          Your habits
        </Typography>
      </Box>
      {/* controlled input */}
      <HabitsToTrack habitsList={filteredHabitsList}/>
      <Navbar/>
    </Box>
  );
};