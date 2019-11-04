import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar';
import { AddNewHabitModal } from '../AddNewHabitModal';
import { EditHabitModal } from '../EditHabitModal';
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
    position: 'relative'
  },
}),
);

export const HabitList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [habitsList, setHabitsList] = useState([]);
  const [filteredHabitsList, setFilteredHabitsList] = useState([])
  const [query, setQuery] = useState('');
  const [editedHabit, setEditedHabit] = useState(null);

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


  const addNewHabit = habit => { 
    setHabitsList([...habitsList, habit]);
    setQuery('')
  }

  const deleteHabit = (idToDelete) => {
    setHabitsList(habitsList.filter((habit,id) => id !== idToDelete))
  }

  const openEditModal = (idToEdit) => {
    setEditedHabit(habitsList.find(habit => habit.id === idToEdit));
    setEditModalOpen(true)
    console.log(idToEdit)
  }

  const editHabit = habitAttributes => {
    setHabitsList(habitsList.map(habit => habit.id === editedHabit.id ? {...editedHabit, ...habitAttributes} : habit))
  }

  return (
    <Box className={classes.mainContainer}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3">
          Manage your habits
        </Typography>
      </Box>
      {/* controlled input */}
      <SearchBar value={query} onChange={ (e) => setQuery(e.target.value)}/>
      <AddNewHabitModal addNewHabit={addNewHabit} isOpen={isModalOpen} onClose={ () => {setModalOpen(false)}} />
      <EditHabitModal editHabit={editHabit} initialValues={editedHabit} isOpen={isEditModalOpen} onClose={ () => {setEditModalOpen(false)}} />
      <HabitsList habitsList={filteredHabitsList} deleteHabit={deleteHabit} onEditButtonClick={openEditModal}/>
      <Navbar onClick={ () => {setModalOpen(true)}} />
    </Box>
  );
};