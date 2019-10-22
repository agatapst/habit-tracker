import Modal from 'react-modal';
import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const AddNewHintModal = ({
  isOpen,
  isBig,
  onClose,
  headerText,
  children,
  ...props
}) => {
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

    <form onSubmit={() => {}}>
     <TextField
       id="title"
       name="title"
       label="Habit title"
       fullWidth
     />
     <TextField
       id="description"
       name="description"
       label="Habit description"
       fullWidth
     />
     <TextField
       id="repeat"
       name="repeat"
       label="Repeat select field"
       fullWidth
     />
     <Button
       type="submit"
       fullWidth
       variant="contained"
       color="primary"
     >
       Submit
     </Button>
   </form>
    </Modal>
  );
};

Modal.setAppElement('body')