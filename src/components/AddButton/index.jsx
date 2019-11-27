import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import history from '../../config/history';
import { CustomButtonBig } from '../Button';

const useStyles = makeStyles(theme => ({
  addButton: {
    position: 'absolute',
    zIndex: 1,
    top: 5,
    right: 60
  }
}));

export const AddButton = ({ onClick, ...props }) => {
  const classes = useStyles();

  if (history.location.pathname.match(/tracker/)) {
    return null;
  }

  return (
    <CustomButtonBig aria-label="add" className={classes.addButton} onClick={onClick}>
      + ADD NEW HABIT
    </CustomButtonBig>
  );
};

export const AddButtonThatHides = withRouter(AddButton);
