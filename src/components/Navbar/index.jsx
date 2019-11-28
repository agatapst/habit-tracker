import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Toolbar, AppBar } from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import { AddButtonThatHides } from '../AddButton';
import { Link } from 'react-router-dom';
import { route } from '../../config/routes';
import { colors } from '../../styles/variables';
import { space } from '../../styles/helpers';

const useStyles = makeStyles => ({
  text: {
    padding: `${space(2)}px`
  },
  paper: {
    padding: `0 0 ${space(12)}px`
  },
  list: {
    margin: `0 0 ${space(2)}px`
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
    flexGrow: 1
  },
  root: {
    minHeight: `${space(14)}px`
  }
});

export const Navbar = ({ onClick }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.root}>
        <IconButton
          edge="start"
          color="default"
          aria-label="open drawer"
          component={Link}
          to={route.tracker()}
        >
          <HomeIcon />
        </IconButton>
        <AddButtonThatHides onClick={onClick} />
        <div className={classes.grow} />
        <IconButton edge="end" color="default" component={Link} to={route.list()}>
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
