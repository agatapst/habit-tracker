import Modal from 'react-modal';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Button from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';
import { Formik, Form } from 'formik';
import { InputField, SelectInputField } from '../InputField/index'

const useStyles = makeStyles((theme) =>
createStyles({
  root: {
    display: 'flex',

  },
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}),
);

export const AddNewHintModal = ({
  isOpen,
  onClose,
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
      maxWidth: 300,
      height: 400,
      width: '100%',
      padding: 30,
      maxHeight: '90vh'
    },
  };
  
  return (
    <Modal isOpen={isOpen} style={customStyles} {...props}>
    Add new habit! 
    <button onClick={onClose}>Close the modal</button>
    
    <Formik 
    initialValues={{title: ''}}
    onSubmit={(values, actions) => {
      console.log('submit')
      // updateHabitList(updatedHabitList);
    }}
    render={(isSumbitting) => (
      <Form className={classes.formControl} >
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
        name="Repeat mode"
        value=''
        >
          <MenuItem value='everyday'>Everyday</MenuItem>
          <MenuItem value='once a week'>Once a week</MenuItem>
          <MenuItem value='once a month'>Once a month</MenuItem>
        </SelectInputField>
          <Button
          type="submit"
          variant="contained"
          color="primary"
          >
            Submit
          </Button>
      </Form>
      )}
      />
      </Modal>
      );
    };
    
    Modal.setAppElement('body')
    
    