import React from 'react';
import { HabitList } from './components/HabitList';
import { Tracker } from './components/Tracker';
import { MainPage } from './components/MainPage';
import { Register } from './auth/registration';
import { Router, Route } from 'react-router-dom';
import { route } from './config/routes';
import history from './config/history';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Firebase, { FirebaseContext } from './auth/Firebase';

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
    <FirebaseContext.Provider>
      <MuiThemeProvider theme={THEME}>
          <Router history={history}>
            <Route exact path={route.root()} component={MainPage} />
            <Route exact path={route.tracker()} component={Tracker} />
            <Route exact path={route.list()} component={HabitList} />
            <Route exact path={route.signUp()} component={Register} />
          </Router>
      </MuiThemeProvider>
    </FirebaseContext.Provider>
  );
}

export default App;
