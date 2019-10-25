import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Fab, Toolbar, AppBar } from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    appBar: {
      position: 'absolute',
      top: 'auto',
      bottom: 0,
      zIndex: 0
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
  }));

export const Navbar = ({onClick}) => {

  const classes = useStyles();

  return (
    <AppBar color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <HomeIcon />
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={onClick}>
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
  );
};