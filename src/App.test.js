import { render, screen } from '@testing-library/react';
import App from './App';
import { EntryProvider } from './context/EntryContext';
import { UserProvider } from './context/UserContext';

test('renders all components on page before a user inputs entries', () => {
  render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );

  const nonUserHeader = screen.getByText(/Enter your name to write an entry!/i);
  expect(nonUserHeader).toBeInTheDocument();

  const input = screen.getByPlaceholderText(/name/i);
  expect(input).toBeInTheDocument();

  const textArea = screen.getByPlaceholderText(/write a note/i);
  expect(textArea).toBeInTheDocument();

  const signButton = screen.getByRole('button', { name: /sign here/i });
  expect(signButton).toBeInTheDocument();
});
