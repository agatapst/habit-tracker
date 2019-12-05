import { render } from '@testing-library/react';
import React from 'react';
import { HabitList } from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Habit List', () => {
  test('renders without failing', () => {
    render(
      <BrowserRouter>
        <HabitList />
      </BrowserRouter>
    );
  });
});
