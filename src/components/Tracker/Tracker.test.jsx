import { render } from '@testing-library/react';
import React from 'react';
import { Tracker } from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Tracker', () => {
  test('renders without failing', () => {
    render(
        <BrowserRouter>
          <Tracker />
        </BrowserRouter>
    );
  });
});