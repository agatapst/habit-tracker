import { render } from '@testing-library/react';
import React from 'react';
import { CategoryIcon } from '.';

describe('Category icon', () => {
  test('renders without failing', () => {
    render(<CategoryIcon />);
  });
});