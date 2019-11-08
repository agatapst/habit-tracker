import React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { colors } from '../../styles/variables';

const useStyles = makeStyles(theme => ({
  root: {
    color: 'theme.colors.white',
    '&$checked': {
      background: theme.colors.darkRed,
      fill: theme.colors.white
    },
  },
}));

export const StyledButton = () => {
  const classes = useStyles();

  return (
    <Button
      classes={{
        root: classes.root
      }}
    />
  );
}

const theme = createMuiTheme({
  colors: {...colors},
});

export const CustomCheckbox = ({...props}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton {...props}/>
    </ThemeProvider>
  );
}