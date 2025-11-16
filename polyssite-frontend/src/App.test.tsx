import { render, screen } from '@testing-library/react';
import App from './App';

test('renders paper doll studio brand', () => {
  render(<App />);
  expect(screen.getByText(/Paper Doll Studio/i)).toBeInTheDocument();
  expect(screen.getByText(/Mix & Match Your Outfit Like a Paper Doll/i)).toBeInTheDocument();
});
