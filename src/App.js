import React from 'react';
import { HabitList } from './components/HabitList';
import { Tracker } from './components/Tracker';
import { Router, Route } from 'react-router-dom';
import { route } from './config/routes';
import history from './config/history'

function App() {
  return (
    <Router history={history}>
      <Route exact path={route.root()} component={Tracker} />
      <Route exact path={route.list()} component={HabitList} />
    </Router>
  );
}

export default App;
