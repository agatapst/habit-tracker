import React from 'react';
import { Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles/variables';
import image from '../../assets/main.png'; 
import { CustomButton } from '../Button';
import { Link } from 'react-router-dom';
import { route } from '../../config/routes';

const useStyles = makeStyles((theme) =>
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
  },
}),
);

export const MainPage = ({children}) => {

  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="row" alignItems="center">
    <>
        <img src={image} style={{width: 800}} alt="Main image" />
    </>
    <Box display="flex" flexDirection="column" alignItems="center">
        <h1 style={{ color: 'black' }}>Track your habits</h1>
            <Box display="flex" flexDirection="row" alignItems="center">
                <CustomButton component={Link} to={route.tracker()}>Start</CustomButton>
            </Box>
    </Box>
    </Box>
  );
};