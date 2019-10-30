import React from 'react';
import { HabitList } from './components/HabitList';
import { Tracker } from './components/Tracker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { route } from './config/routes';

function App() {
  return (
    <Router>
      <Route exact path={route.root()} component={Tracker} />
      <Route exact path={route.list()} component={HabitList} />
    </Router>
  );
}

export default App;
