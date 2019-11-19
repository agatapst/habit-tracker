import Modal from 'react-modal';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Button, Box, Typography } from "@material-ui/core";
import { Formik, Form } from 'formik';
import { InputField } from '../InputField/index'
import CloseIcon from '@material-ui/icons/Close';
import { CategoriesField } from '../CategoriesField';
import { CustomButton } from '../Button';

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
    maxHeight: 290
  },
}),
);

export const EditHabitModal = ({
  isOpen,
  onClose,
  editHabit,
  initialValues,
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
    <h4 style={{margin: '0 auto'}}>EDIT HABIT</h4>
      <CloseIcon onClick={onClose} className={classes.closeIcon} />
    </Box>
    
    <Formik 
    initialValues={initialValues}
    onSubmit={(values, actions) => {
      console.log(values);
      editHabit(values)
      actions.resetForm();
      onClose();
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
          
          {/* <SelectInputField
          label="Repeat mode"
          name="repeatMode"
          >
            <MenuItem value='everyday'>Everyday</MenuItem>
            <MenuItem value='once a week'>Once a week</MenuItem>
            <MenuItem value='once a month'>Once a month</MenuItem>
          </SelectInputField> */}

          <CategoriesField id="category" name="category"/>
        </div>

        <>
          <CustomButton
          type="submit"
          variant="contained"
          color="primary"
          style={{margin: '0 auto'}}
          >
            Save 
          </CustomButton>
        </>
      </Form>
      )}
      />
      </Modal>
      );
    };
    
    Modal.setAppElement('body')
    
    