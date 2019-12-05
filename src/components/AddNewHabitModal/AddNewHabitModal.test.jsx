import { render } from '@testing-library/react';
import React from 'react';
import { AddNewHabitModal } from '.';

describe('Add New Habit modal', () => {
  test('renders without failing', () => {
    render(<AddNewHabitModal />);
  });
});