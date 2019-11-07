import React from 'react';
import { HabitList } from './components/HabitList';
import { Tracker } from './components/Tracker';
import { Router, Route } from 'react-router-dom';
import { route } from './config/routes';
import history from './config/history';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
  typography: {
   "fontFamily": "\"Poppins\", sans-serif",
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
        <Router history={history}>
          <Route exact path={route.root()} component={Tracker} />
          <Route exact path={route.list()} component={HabitList} />
        </Router>
    </MuiThemeProvider>
  );
}

export default App;
