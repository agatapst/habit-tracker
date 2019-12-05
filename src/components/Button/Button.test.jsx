import { render } from '@testing-library/react';
import React from 'react';
import { CustomButton } from '.';

describe('Custom button', () => {
  test('renders without failing', () => {
    const text = 'Button text';
    const { getByText } = render(<CustomButton>{text}</CustomButton>);
    getByText(text);
  });
});
