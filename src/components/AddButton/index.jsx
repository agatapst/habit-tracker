import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from 'react-router-dom';  
import history from '../../config/history'

const useStyles = makeStyles(theme => ({
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
  }));

export const AddButton = ({onClick, ...props}) => {

  const classes = useStyles();

  if (history.location.pathname.match(/main/)){
    return null;
  }

  return (
    <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={onClick}>
        <AddIcon />
    </Fab>
  );
};

export const AddButtonThatHides = withRouter(AddButton);
