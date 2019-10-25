import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar';
import { AddNewHabitModal } from '../AddNewHabitModal';
import { SearchBar } from '../SearchBar';
import { HabitsList } from './HabitsList';
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
    position: 'relative',
    fontFamily: 'Lato',
    overflow: 'scroll'
  },
}),
);

export const HabitList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
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


  const addNewHabit = habit => setHabitsList([...habitsList, habit]);

  const deleteHabit = (indexToDelete) => {
    setHabitsList(habitsList.filter((habit,index) => index !== indexToDelete))
  }

  const editHabit = (indexToEdit) => {
    setModalOpen(true)
  }

  const filterHabits = (query) => {
    // console.log(habitsList)
    const filteredHabits = habitsList.filter((habit) => {
      return habit.title.toLowerCase().includes(query.toLowerCase());
    });
    console.log(filteredHabits)
  }


  return (
    <Box className={classes.mainContainer}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3">
          Choose habit to track
        </Typography>
      </Box>
      <SearchBar onChange={ (e) => filterHabits(e.target.value)}/>
      <AddNewHabitModal addNewHabit={addNewHabit} isOpen={isModalOpen} onClose={ () => {setModalOpen(false)}} />
      <HabitsList habitsList={habitsList} deleteHabit={deleteHabit} editHabit={editHabit}/>
      <Navbar onClick={ () => {setModalOpen(true)}} />
    </Box>
  );
};