import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Fab, Toolbar, AppBar } from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/MoreVert';
import { AddButton, AddButtonThatHides } from '../AddButton';
import { Link } from 'react-router-dom';
import { route } from '../../config/routes';

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
      zIndex: 0,

      '& > svg': {
        color: 'white'
      }
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
          <Link to={route.root()}>
            <IconButton edge="start" color="default" aria-label="open drawer" href={route.root()}>
              <HomeIcon />
            </IconButton>
          </Link>
          <AddButtonThatHides onClick={onClick}/>
          <div className={classes.grow} />
          <Link to={route.list()}>
            <IconButton edge="end" color="default">
              <MoreIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
  );
};