import { render, screen } from '@testing-library/react';
import Chat from './Chat';

test('renders test rect element', () => {
  render(<Chat />);
  const testElement = screen.getByText(/chat/i);
  expect(testElement).toBeInTheDocument();
});
