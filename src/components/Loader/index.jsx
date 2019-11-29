import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { colors } from '../../styles/variables';
import { space } from '../../styles/helpers';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    margin: `${space(4)}px`,

    '& > *': {
      color: colors.mainRed
    }
  }
}));

export const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};
