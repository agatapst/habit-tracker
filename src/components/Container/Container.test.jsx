import { render } from '@testing-library/react';
import React from 'react';
import { Container } from '.';

describe('Container', () => {
  test('renders without failing', () => {
    render(<Container />);
  });
});
