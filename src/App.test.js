import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Admin Dashboard link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Admin Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
