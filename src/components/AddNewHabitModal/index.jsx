import Modal from 'react-modal';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Box } from "@material-ui/core";
import { Formik, Form } from 'formik';
import { InputField } from '../InputField'
import { CategoriesField } from '../CategoriesField'
import CloseIcon from '@material-ui/icons/Close';
import uuid from "uuid/v4";
import { CustomButton } from '../Button';


const useStyles = makeStyles((theme) =>
createStyles({
  root: {
    display: 'flex',
  },
  formControl: {
    display: 'flex',
    flexDirection: 'column',
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
    width: '100%',
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
      padding: 30,
      maxHeight: '90vh',
      position: 'absolute',
      width: 400
    },
    overlay: {
      backgroundOpacity: '90%'
    }
  };

  return (
    <Modal isOpen={isOpen} style={customStyles} {...props}>
    
    <Box display="flex" justifyContent="space-between">
      <h4 style={{margin: '0 auto'}}>ADD NEW HABIT</h4>
      <CloseIcon onClick={onClose} className={classes.closeIcon} />
    </Box>
    
    <Formik 
    initialValues={{title: '', description: '', id: uuid(), category: ''}}
    onSubmit={(values, actions) => {
      console.log(values);
      addNewHabit(values);
      actions.resetForm();
      onClose();
    }}
    render={(isSumbitting) => (
      <Form className={classes.formControl}>
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
        <CategoriesField id="category" name="category" />
        </div>

        <>
          <CustomButton
          type="submit"
          variant="contained"
          color="primary"
          style={{margin: '0 auto'}}
          >
            Create habit
          </CustomButton>
        </>
      </Form>
      )}
      />
      </Modal>
      );
    };
    
    Modal.setAppElement('body')
    
    
    