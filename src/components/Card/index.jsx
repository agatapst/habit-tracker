import React from 'react';
import { Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { spacing } from '../../styles/variables';
import { space } from '../../styles/helpers';

const useStyles = makeStyles(theme =>
  createStyles({
    mainCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'white',
      padding: `${space(5)}px`,
      borderRadius: spacing.radius
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
