import { render } from '@testing-library/react';
import React from 'react';
import { SearchBar } from '.';

describe('Search bar', () => {
  test('renders without failing', () => {
    render(<SearchBar />);
  });
});