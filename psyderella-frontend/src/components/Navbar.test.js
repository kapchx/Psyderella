import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('tests if logo is rendered', () => {
  render(<Navbar />);
  const testElement = screen.getByRole('img');
  expect(testElement).toBeInTheDocument();
});

test('tests if login button is rendered when user is logged in', () => {
  render(<Navbar authToken={false} />);
  const testElement = screen.getByRole('button');
  expect(testElement).toBeInTheDocument();
});

test('tests if login button is not rendered when user is not logged in', () => {
  render(<Navbar authToken />);
  const testElement = screen.queryByRole('button');
  expect(testElement).not.toBeInTheDocument();
});
