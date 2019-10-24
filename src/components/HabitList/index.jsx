import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import { AddNewHabitModal } from '../AddNewHabitModal';
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
  const addNewHabit = habit => setHabitsList([...habitsList, habit]);

  return (
    <Box className={classes.mainContainer}>
      <Box display="flex" justifyContent="space-between">
      <Typography variant="h3">
        Choose habit to track
      </Typography>
      </Box>
      <AddNewHabitModal addNewHabit={addNewHabit} isOpen={isModalOpen} onClose={ () => {setModalOpen(false)}} />
      <HabitsList habitsList={habitsList}/>
      <Navbar onClick={ () => {setModalOpen(true)}} />
    </Box>
  );
};