import React, { useState } from 'react';
import { AddNewHabitModal } from '../AddNewHabitModal';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export const HabitList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [habitsList, setHabitsList] = useState([]);

  const addNewHabit = habit => setHabitsList([...habitsList, habit]);

  return (
    <Box height={600} width={500} m={10} bgcolor="#FCE4A6">
        <Box display="flex" justifyContent="space-between">
          hello this is habit list
          <Button variant="contained" color="primary" onClick={ () => {setModalOpen(true)}}>+ add new</Button>
        </Box>
        <AddNewHabitModal addNewHabit={addNewHabit} isOpen={isModalOpen} onClose={ () => {setModalOpen(false)}} />
        <ul>
          
          {habitsList.map((habit, index) => (
            <li key={index}>{habit.title} {habit.description} {habit.repeatMode}</li>
          ))}
         
        </ul>
    </Box>
  );
};