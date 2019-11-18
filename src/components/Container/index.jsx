import React from 'react';
import { Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles/variables';

const useStyles = makeStyles((theme) =>
createStyles({
  mainContainer: {
    height: '700px',
    width: '600px',
    marginTop: '30px',
    background: '#ffffff',
    border: `1px solid ${colors.mainRed}`,
    borderRadius: '5px',
    padding: '20px',
    position: 'relative'
  },
}),
);

export const Container = ({children}) => {

  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
        {children}
    </Box>
  );
};