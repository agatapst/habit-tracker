import React from 'react';
import { Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles/variables';

const useStyles = makeStyles(theme =>
  createStyles({
    mainCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'white',
      height: '100%',
      padding: 20,
      borderRadius: 5
    },
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  })
);

export const Card = ({ children, flexDirection }) => {
  const classes = useStyles();

  return (
    <Box className={classes.mainCard} flexDirection={flexDirection}>
      {children}
    </Box>
  );
};
