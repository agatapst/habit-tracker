import { render } from '@testing-library/react';
import React from 'react';
import { CustomCheckbox } from '.';

describe('Checkbox', () => {
  test('renders without failing', () => {
    render(<CustomCheckbox />);
  });
});
