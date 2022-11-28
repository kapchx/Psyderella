import { render, screen } from '@testing-library/react';
import ChatInput from './ChatImput';

test('tests if submit button renders', () => {
  render(<ChatInput />);
  const testElement = screen.getByRole('button');
  expect(testElement).toBeInTheDocument();
});
