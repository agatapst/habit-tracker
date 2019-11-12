import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar';
import { AddNewHabitModal } from '../AddNewHabitModal';
import { EditHabitModal } from '../EditHabitModal';
import { SearchBar } from '../SearchBar';
import { Container } from '../Container';
import { HabitsList } from './HabitsList';
import { Box, Typography } from '@material-ui/core';

const DEFAULT_HABITS = [
  {"id":"1", "title":"Pójść na spacer","description":"Minimum 5 kilometrów","category":"sports","trackedDays":["2019-11-04", "2019-11-05"]},
  {"id":"2", "title":"Joga","description":"","category":"selfCare","trackedDays":["2019-11-05", "2019-11-06"]},
]

export const HabitList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [habitsList, setHabitsList] = useState([]);
  const [filteredHabitsList, setFilteredHabitsList] = useState([])
  const [query, setQuery] = useState('');
  const [editedHabit, setEditedHabit] = useState(null);
    
  useEffect(() => {
    const habits = localStorage.getItem('habitsList');
     if(habits && habits !== "[]") {
       setHabitsList(JSON.parse(habits))
     } else {
      setHabitsList(DEFAULT_HABITS)
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
    <Container>
      <h3>MANAGE YOUR HABITS</h3>
      <SearchBar value={query} onChange={ (e) => setQuery(e.target.value)}/>
      <AddNewHabitModal addNewHabit={addNewHabit} isOpen={isModalOpen} onClose={ () => {setModalOpen(false)}} />
      <EditHabitModal editHabit={editHabit} initialValues={editedHabit} isOpen={isEditModalOpen} onClose={ () => {setEditModalOpen(false)}} />
      <HabitsList habitsList={filteredHabitsList} deleteHabit={deleteHabit} onEditButtonClick={openEditModal}/>
      <Navbar onClick={ () => {setModalOpen(true)}} />
    </Container>
  );
};