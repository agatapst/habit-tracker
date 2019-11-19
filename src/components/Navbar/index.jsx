import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Toolbar, AppBar } from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import { AddButtonThatHides } from '../AddButton';
import { Link } from 'react-router-dom';
import { route } from '../../config/routes';
import { colors } from '../../styles/variables';

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
      background: colors.mainRed,

      '& > svg': {
        color: 'white'
      }
    },
    grow: {
      flexGrow: 1,
    },
  }));

export const Navbar = ({onClick}) => {

  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="default" aria-label="open drawer" component={Link} to={route.tracker()}>
            <HomeIcon />
          </IconButton>
          <AddButtonThatHides onClick={onClick}/>
          <div className={classes.grow} />
          <IconButton edge="end" color="default" component={Link} to={route.list()}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
  );
};