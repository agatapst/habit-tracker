import React, { useState } from 'react';
import { AddNewHintModal } from '../AddNewHintModal';
import Button from '@material-ui/core/Button';

export const HabitList = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <div>
        hello, this is habit list
        <Button variant="contained" color="primary" onClick={ () => {setModalOpen(true)}}>Add new habit</Button>
        <AddNewHintModal isOpen={isModalOpen} onClose={ () => {setModalOpen(false)}} />
    </div>
  );
};