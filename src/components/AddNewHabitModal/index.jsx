import Modal from 'react-modal';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Button, MenuItem, Box, Typography } from "@material-ui/core";
import { Formik, Form } from 'formik';
import { InputField, SelectInputField } from '../InputField/index'
import { Persist } from 'formik-persist'
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) =>
createStyles({
  root: {
    display: 'flex',

  },
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    minHeight: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  closeIcon: {
    cursor: 'pointer'
  },
  formFields: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 2,
    width: '100%',
    maxHeight: 400
  },

}),
);

export const AddNewHabitModal = ({
  isOpen,
  onClose,
  addNewHabit,
  children,
  ...props
}) => {
  const classes = useStyles();

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: 500,
      width: 300,
      padding: 30,
      maxHeight: '90vh',
      position: 'absolute'
    },
    overlay: {
      backgroundOpacity: '90%'
    }
  };

  return (
    <Modal isOpen={isOpen} style={customStyles} {...props}>
    
    <Box display="flex" justifyContent="space-between">
      <Typography variant="h4">
      Add new habit! 
      </Typography>
      <CloseIcon onClick={onClose} className={classes.closeIcon} />
    </Box>
    
    <Formik 
    initialValues={{title: '', description: '', repeatMode: 'everyday'}}
    onSubmit={(values, actions) => {
      console.log(values);
      addNewHabit(values);
      actions.resetForm();
      // onClose={onClose}
    }}
    render={(isSumbitting) => (
      <Form className={classes.formControl} >
        <div className={classes.formFields}>
          <InputField
            id="title"
            name="title"
            label="Habit title"
            />
            <InputField
            id="description"
            name="description"
            label="Habit description"
            />
          
          <SelectInputField
          label="Repeat mode"
          name="repeatMode"
          >
            <MenuItem value='everyday'>Everyday</MenuItem>
            <MenuItem value='once a week'>Once a week</MenuItem>
            <MenuItem value='once a month'>Once a month</MenuItem>
          </SelectInputField>
        </div>

        <div >
          <Button
          type="submit"
          variant="contained"
          color="primary"
          >
            Submit
          </Button>
        </div>

      </Form>
      )}
      />
      </Modal>
      );
    };
    
    Modal.setAppElement('body')
    
    