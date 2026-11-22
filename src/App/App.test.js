import React from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import App from './App';

beforeEach(() => window.localStorage.clear());

test('opens the seeded fleet availability calendar', () => {
  const view = render(<App />);

  expect(view.getByRole('heading', { name: 'Fleet availability' })).toBeInTheDocument();
  expect(view.getByText('Articulating boom lift')).toBeInTheDocument();
});

test('creates a booking and retains it and the rented asset after reopening', () => {
  const view = render(<App />);
  fireEvent.click(view.getByRole('button', { name: 'New booking' }));
  fireEvent.click(view.getByRole('button', { name: 'Create booking' }));

  view.unmount();
  const reopened = render(<App />);
  fireEvent.click(reopened.getByRole('button', { name: /^Bookings/ }));
  const booking = reopened.getByRole('row', { name: /Articulating boom lift.*\$370/ });
  expect(within(booking).getByText('$370')).toBeInTheDocument();
  expect(within(booking).getByText('Confirmed')).toBeInTheDocument();

  fireEvent.click(reopened.getByRole('button', { name: 'Equipment', exact: true }));
  const equipment = reopened.getByText('Articulating boom lift').closest('tr');
  expect(within(equipment).getByText('Rented')).toBeInTheDocument();
});
