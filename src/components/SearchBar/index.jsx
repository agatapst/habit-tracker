import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import { colors } from '../../styles/variables';

const useStyles = makeStyles(theme => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
      marginTop: 10
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      borderBottom: `1px solid ${colors.black}`,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        '&:focus': {
          width: '100%',
          borderColor: colors.mainRed,
        },
      },
    },
  }));

export const SearchBar = ({...props}) => {

  const classes = useStyles();

  return (
    <div className={classes.search}>
        <div className={classes.searchIcon}>
        <SearchIcon/>
        </div>
        <InputBase
            placeholder="Type a habit…"
            classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            {...props}
        />
    </div>
  );
};