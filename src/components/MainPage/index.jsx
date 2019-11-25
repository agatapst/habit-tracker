import React from 'react';
import { Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles/variables';
import image from '../../assets/main.png';
import { CustomButton } from '../Button';
import { Link } from 'react-router-dom';
import { route } from '../../config/routes';
import { Container } from '../Container';

const useStyles = makeStyles(theme =>
  createStyles({
    mainContainer: {
      height: '600px',
      width: '400px',
      marginTop: '50px',
      background: '#ffffff',
      border: `1px solid ${colors.mainRed}`,
      borderRadius: '5px',
      padding: '20px',
      position: 'relative'
    }
  })
);

export const MainPage = ({ children }) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
      <Box display="flex" flexDirection="column" alignItems="center" style={{ height: '100%' }}>
        <img src={image} style={{ width: 550 }} alt="Boy with todo list" />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ background: 'white', height: '100%' }}
      >
        <h1>Track your habits</h1>
        <p>
          It's hard to shake off a habit since it takes an average of 66 days before a new habit
          takes root in our brain.
        </p>
        <Box display="flex" flexDirection="row" alignItems="center">
          <CustomButton component={Link} to={route.signUp()}>
            Register
          </CustomButton>
          <CustomButton component={Link} to={route.signUp()}>
            Login
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};
