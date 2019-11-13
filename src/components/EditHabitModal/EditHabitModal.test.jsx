import { render } from '@testing-library/react';
import React from 'react';
import { EditHabitModal } from '.';

describe('Edit Habit modal', () => {
  test('renders without failing', () => {
    render(<EditHabitModal />);
  });
});