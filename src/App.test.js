import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('renders users name in the header after user interacts with form', () => {
  render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );

  const nameInput = screen.getByPlaceholderText(/name/i);
  const entryInput = screen.getByPlaceholderText(/write a note/i);
  const signButton = screen.getByRole('button', { name: /sign here/i });

  const name = 'noah';
  const entry = 'ello';

  userEvent.type(nameInput, name);
  userEvent.type(entryInput, entry);

  userEvent.click(signButton);

  const userHeader = screen.getByText(/signing the guestbook as noah/i);
  expect(userHeader).toBeInTheDocument();
});

test('renders users entry on the page after user interacts with form', () => {
  render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );

  const nameInput = screen.getByPlaceholderText(/name/i);
  const entryInput = screen.getByPlaceholderText(/write a note/i);
  const signButton = screen.getByRole('button', { name: /sign here/i });

  const name = 'Anakin';
  const entry = 'I am the chosen one';

  userEvent.type(nameInput, name);
  userEvent.type(entryInput, entry);

  userEvent.click(signButton);

  const userEntry = screen.getByText(/Anakin I am the chosen one/i);
  expect(userEntry).toBeInTheDocument();
});
