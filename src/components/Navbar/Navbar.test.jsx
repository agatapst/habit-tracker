import { render } from '@testing-library/react';
import React from 'react';
import { Navbar } from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
  test('renders without failing', () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
  });
});