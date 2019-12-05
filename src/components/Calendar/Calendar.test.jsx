import { render } from '@testing-library/react';
import React from 'react';
import { MonthCalendar } from '.';

describe('Calendar', () => {
  test('renders without failing', () => {
    render(<MonthCalendar />);
  });
});
