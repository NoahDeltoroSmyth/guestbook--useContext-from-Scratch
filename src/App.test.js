import { render, screen } from '@testing-library/react';
import App from './App';
import { UserProvider } from './context/UserContext';

test('renders learn react link', () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>
  );
  const linkElement = screen.getByText(/Enter your name to write an entry!/i);
  expect(linkElement).toBeInTheDocument();
});
