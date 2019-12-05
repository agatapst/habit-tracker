import Modal from 'react-modal';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { InputField } from '../InputField/index';
import CloseIcon from '@material-ui/icons/Close';
import { CategoriesField } from '../CategoriesField';
import { CustomButtonBig } from '../Button';
import { Card } from '../Card';
import { ModalStyles } from '../../styles/modals';

const useStyles = makeStyles(() =>
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
    content: ModalStyles.content,
    overlay: ModalStyles.overlay
  };

  return (
    <Modal isOpen={isOpen} style={customStyles} {...props}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(values);
          editHabit(values);
          actions.resetForm();
          onClose();
        }}
        render={isSumbitting => (
          <Form>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h5" className={classes.title}>
                Edit Habit
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
              <CategoriesField id="category" name="category" />

              <CustomButtonBig type="submit">Save</CustomButtonBig>
            </Card>
          </Form>
        )}
      />
    </Modal>
  );
};

Modal.setAppElement('body');
