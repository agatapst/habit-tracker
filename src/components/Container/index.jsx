import React from 'react';
import { Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles/variables';

const useStyles = makeStyles(() =>
  createStyles({
    mainContainer: {
      height: 630,
      width: 600,
      marginTop: 30,
      background: colors.lightGrey,
      border: `1px solid ${colors.mainRed}`,
      borderRadius: 5,
      padding: 20,
      position: 'relative'
    }
  })
);

export const Container = ({ children }) => {
  const classes = useStyles();

  return <Box className={classes.mainContainer}>{children}</Box>;
};
