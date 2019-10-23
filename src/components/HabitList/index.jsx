import React, { useState } from 'react';
import { AddNewHintModal } from '../AddNewHabitModal';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export const HabitList = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <Box height={600} width={500} m={10} bgcolor="#FCE4A6">
        <Box display="flex" justifyContent="space-between">
          hello this is habit list
          <Button variant="contained" color="primary" onClick={ () => {setModalOpen(true)}}>+ add new</Button>
        </Box>
        <AddNewHintModal isOpen={isModalOpen} onClose={ () => {setModalOpen(false)}} />
        <ul>
          <li>habit 1</li>
          <li>habit 2</li>
        </ul>
    </Box>
  );
};