import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import EntryList from './components/EntryList/EntryList';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import { EntryProvider } from './context/EntryContext';
import { UserProvider } from './context/UserContext';

// test('renders all components on page before a user inputs entries', () => {
//   render(
//     <MemoryRouter initialEntries={['/']}>
//       <UserProvider>
//         <EntryProvider>
//           <Route path="/" component={App} />
//         </EntryProvider>
//       </UserProvider>
//     </MemoryRouter>
//   );

//   const nonUserHeader = screen.getByText(/Enter your name to write an entry!/i);
//   expect(nonUserHeader).toBeInTheDocument();

//   const input = screen.getByPlaceholderText(/name/i);
//   expect(input).toBeInTheDocument();

//   const textArea = screen.getByPlaceholderText(/write a note/i);
//   expect(textArea).toBeInTheDocument();

//   const signButton = screen.getByRole('button', { name: /sign here/i });
//   expect(signButton).toBeInTheDocument();
//   window.localStorage.clear();
// });

// test('renders users name in the header after user interacts with form', () => {
//   render(
//     <MemoryRouter initialEntries={['/']}>
//       <UserProvider>
//         <EntryProvider>
//           <Route path="/" component={(EntryList, Form, Header)} />
//         </EntryProvider>
//       </UserProvider>
//     </MemoryRouter>
//   );

//   const nameInput = screen.getByPlaceholderText(/name/i);
//   const entryInput = screen.getByPlaceholderText(/write a note/i);
//   const signButton = screen.getByRole('button', { name: /sign here/i });

//   const name = 'noah';
//   const entry = 'ello';

//   userEvent.type(nameInput, name);
//   userEvent.type(entryInput, entry);

//   userEvent.click(signButton);

//   const userHeader = screen.getByText(/signing the guestbook as noah/i);
//   expect(userHeader).toBeInTheDocument();
//   window.localStorage.clear();
// });

test('renders users entry on the page after user interacts with form', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <UserProvider>
        <EntryProvider>
          <Route path="/" component={(EntryList, Form)} />
        </EntryProvider>
      </UserProvider>
    </MemoryRouter>
  );

  const nameInput = screen.getByPlaceholderText(/name/i);
  const entryInput = screen.getByPlaceholderText(/write a note/i);
  const signButton = screen.getByRole('button', { name: /sign here/i });

  const name = 'Anakin';
  const entry = 'I am the chosen one';

  userEvent.type(nameInput, name);
  userEvent.type(entryInput, entry);
  userEvent.click(signButton);

  waitFor(() => {
    const userEntry = screen.getByRole('heading', { name: /i am the chosen one/i });
    expect(userEntry).toBeInTheDocument();
  });

  waitFor(() => {
    const userName = screen.getByRole('heading', { name: /-anakin/i });
    expect(userName).toBeInTheDocument();
  });
  window.localStorage.clear();
});
