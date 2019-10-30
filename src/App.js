import React from 'react';
import { HabitList } from './components/HabitList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { route } from './config/routes';

function App() {
  return (
    <Router>
      <Route exact path={route.root()} component={HabitList} />
    </Router>
  );
}

export default App;
