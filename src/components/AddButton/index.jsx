import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';  
import history from '../../config/history'
import { CustomButton } from '../Button';

const useStyles = makeStyles(theme => ({
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: 19,
      right: 60
    },
  }));

export const AddButton = ({onClick, ...props}) => {

  const classes = useStyles();

  if (history.location.pathname.match(/tracker/)){
    return null;
  }

  return (
    <CustomButton aria-label="add" className={classes.fabButton} onClick={onClick}>
        + ADD NEW HABIT
    </CustomButton>
  );
};

export const AddButtonThatHides = withRouter(AddButton);
