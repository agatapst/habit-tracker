import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import history from '../../config/history';
import { CustomButtonBig } from '../Button';
import { space } from '../../styles/helpers';

const useStyles = makeStyles(() => ({
  addButton: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: `${space(12)}px`
  }
}));

export const AddButton = ({ onClick }) => {
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
