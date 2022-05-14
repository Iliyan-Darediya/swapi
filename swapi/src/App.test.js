import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name of characters', () => {
  render(<App />);
  const OptionElement = screen.getByText(/Luke Skywalker/i);
  expect(OptionElement).toBeInTheDocument();
});
