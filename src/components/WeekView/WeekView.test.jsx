import { render } from '@testing-library/react';
import React from 'react';
import { WeekView } from '.';

describe('Week view', () => {
  test('renders without failing', () => {
    render(<WeekView />);
  });
});