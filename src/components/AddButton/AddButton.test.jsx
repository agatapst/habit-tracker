import { render } from '@testing-library/react';
import React from 'react';
import { AddButton } from '.';

describe('Add Button', () => {
  test('renders without failing', () => {
    render(<AddButton />);
  });
});