import React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import { colors } from '../../styles/variables';

export const CustomButton = withStyles({
    root: {
      backgroundColor: colors.darkRed,
      borderRadius: 3,
      border: 0,
      color: 'white',
      padding: '2px 10px',
      width: 150,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      display: 'inline',

      '&:hover': {
          backgroundColor: colors.darkRed,
      }
    },
  })(Button);