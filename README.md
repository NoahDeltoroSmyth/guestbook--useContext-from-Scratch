# Plan for incorporating context into app

### Initital set up

1. npm i / create dev branch / start up file tree
2. create a rough plan in read me

### First

- Make a header that incorporates dynamic user name

1. create / write header component file
2. create / write out UserContext file
3. set UserProvider tags around App component in index.jsx
4. Call useUser inside header component

### Second

- create guest book section of app
  - guest name input
  - guest entry text area
  - sign button that adds entry to the array of entries
  - not {user}? button that clears current {user} name and accepts a new {user} name

### Third

- create Entry list part of app
  - array of past entries that have user name and entry details

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
