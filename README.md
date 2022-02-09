# Plan for incorporating context into app

### Initital set up

1. npm i / create dev branch / start up file tree
2. create a rough plan in read me

### First

- Make a header that incorporates dynamic user name

1. create / write header component file
2. create / write out UserContext file
3. set UserProvider tags around App component in index.jsx
4. pass useUser inside header component

### Second

- Set up Entry Context
  1. write EntryContext file
  - place Provider tags (somewhere? maybe with userProvider in index.js)
  - pass useEntryList (somewhere? Vonta has his in GuestBook)

### Third

- Create guestbook section of app (main body section)

1. pass useEntryList and useUser in this file
2. define 2 more useStates in this file for name & entry to open strings ('') (these are to track a user's input)
3. create conditionally rendered guest name input area
4. create guest entry text area
5. create sign button that adds new entry to the array of entries
6. create conditionally rendered button that allows user to create a new name (sort of like a signout)

### Fourth

- create a Entry List part of app that displays all of the previous entries using a (.map)

1. create a new file
2. map through all of the existing entries

- all should have user's name and the entry information

## Example of ! operator and ternerary doing the same thing

```
    <>
      {user && <p>Signing the guestbook as {user}</p>}
      {!user && <p>Enter your name to write an entry!</p>}
    </>
AND
    {user ? (
        <p>
          Signing Guestbook as <span className="text-red-400">{user}</span>
        </p>
      ) : (
        <p>Sign In Friend!</p>
      )}
```

# Plan for incorporating more to the app

### Any and all ideas

1. Refactor code?
2. DarkMode
3. CSS
4. refactor state to a custom hook
5. api calls
6. browser router to use location, history, params
7. more custom hooks (write yourself, or found in the wild)/ context
   behavior

## Context vs custom hooks

- custom hook not using context : shares logic between components (business logic). optimal for refactoring / clean code
- custom hook using context: shares logic and data / state
