import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { colors } from '../../styles/variables';

const useStyles = makeStyles(theme => ({
  root: {
    color: 'theme.colors.white',
    '&$checked': {
      color: theme.colors.darkRed,
      fill: theme.colors.white
    },
  },
  checked: {},
}));

export const StyledCheckbox = ({disabled, checked, onChange}) => {
  const classes = useStyles();

  return (
    <Checkbox
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      classes={{
        root: classes.root,
        checked: classes.checked,
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
      <StyledCheckbox {...props}/>
    </ThemeProvider>
  );
}