import Modal from 'react-modal';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { InputField } from '../InputField';
import { CategoriesField } from '../CategoriesField';
import CloseIcon from '@material-ui/icons/Close';
import uuid from 'uuid/v4';
import { CustomButtonBig } from '../Button';
import { ModalStyles } from '../../styles/modals';
import { Card } from '../Card';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex'
    },
    title: {
      textAlign: 'center',
      width: '100%'
    },
    closeIcon: {
      cursor: 'pointer'
    }
  })
);

export const AddNewHabitModal = ({ isOpen, onClose, addNewHabit, children, ...props }) => {
  const classes = useStyles();

  const customStyles = {
    content: ModalStyles.content,
    overlay: ModalStyles.overlay
  };

  return (
    <Modal isOpen={isOpen} style={customStyles} {...props}>
      <Formik
        initialValues={{ title: '', description: '', id: uuid(), category: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          addNewHabit(values);
          actions.resetForm();
          onClose();
        }}
        render={isSubmitting => (
          <Form className={classes.formGroup}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h5" className={classes.title}>
                Add new habit
              </Typography>
              <CloseIcon onClick={onClose} className={classes.closeIcon} />
            </Box>
            <Card>
              <InputField id="title" name="title" label="Habit title" variant="outlined" />
              <InputField
                id="description"
                name="description"
                label="Habit description"
                variant="outlined"
              />
              <CategoriesField id="category" name="category" variant="outlined" />
              <CustomButtonBig type="submit">Create habit</CustomButtonBig>
            </Card>
          </Form>
        )}
      />
    </Modal>
  );
};

Modal.setAppElement('body');
