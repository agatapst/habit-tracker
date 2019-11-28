import React, { useState, useEffect } from 'react';
import { HabitList } from './components/HabitList';
import { Tracker } from './components/Tracker';
import { MainPage } from './components/MainPage';
import { Register } from './auth/Register';
import { Login } from './auth/Login';
import { Router, Route } from 'react-router-dom';
import { route } from './config/routes';
import history from './config/history';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as firebase from 'firebase';
import { firebaseConfig } from './config/firebase';
import { FirebaseProvider, UserProvider } from './auth/Firebase';
import { startOfHour } from 'date-fns';

const THEME = createMuiTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: 14
  }
});

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(() => firebase.auth().currentUser);

  useEffect(() => {
    // listen for auth state changes
    const unsubscribeFunction = firebase.auth().onAuthStateChanged(user => setUser(user));
    // unsubscribe to the listener when unmounting
    return () => unsubscribeFunction();
  }, []);

  return (
    <FirebaseProvider value={firebase}>
      <UserProvider value={{ user: user }}>
        <MuiThemeProvider theme={THEME}>
          <Router history={history}>
            <Route exact path={route.root()} component={Register} />
            <Route exact path={route.tracker()} component={Tracker} />
            <Route exact path={route.list()} component={HabitList} />
            <Route exact path={route.signUp()} component={Register} />
            <Route exact path={route.login()} component={Login} />
          </Router>
        </MuiThemeProvider>
      </UserProvider>
    </FirebaseProvider>
  );
}

export default App;
