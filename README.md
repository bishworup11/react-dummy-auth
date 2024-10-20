
# Project Documentation: User Management with Dummy API & Authentication

## Dummy API: https://dummyjson.com/docs/users
## 1. **Project Overview**
This project is a user management system that integrates a dummy API for user data retrieval and authentication. The app allows users to:
- View a list of users
- Search for specific users
- Load more users dynamically
- Perform login with a dummy authentication system
- View personal user data after login
- Persist login status and user data using localStorage

### Key Features:
1. **User List and Search**: Fetches users from a dummy API and displays them. Users can search by name and load more users.
2. **Authentication**: Login with dummy credentials, store authentication tokens in `localStorage`, and display personalized data after login.
3. **Profile View**: Displays user details, including personal, address, company, and bank information, after authentication.
4. **Protected Routes**: Ensures that certain routes (like Profile) are only accessible after login. Redirects users to the login page if not authenticated.

## 2. **Installation**

### Prerequisites
Make sure you have the following tools installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)

### Steps to Install

1. Clone the repository:
   ```bash
      https://github.com/bishworup11/react-dummy-auth.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-dummy-auth
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm start
   ```

The application will run locally on [http://localhost:3000](http://localhost:3000).

## 3. **Project Structure**

```bash
├── public
├── src
│   ├── components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Profile.jsx
│   │   ├── UserCard.jsx
│   ├── App.js
│   ├── index.js
├── package.json
```

### Key Components:

1. **App.js**: This file handles routing, authentication, and stores the login state, user data, and token. It uses the `useState` and `useEffect` hooks to manage login state persistence.

2. **Home.jsx**: The main page that displays a list of users fetched from the dummy API. It has a search feature to look for users and a button to load more users.

3. **Profile.jsx**: Displays detailed information about the authenticated user, including personal details, address, company, and bank info. This page is protected and requires the user to be logged in.

4. **UserCard.jsx**: A component to display individual user details in a card format on the Home page.

5. **Navbar.jsx**: Displays navigation links and handles login/logout actions.

6. **Login.jsx**: Handles user login. On successful login, it stores the token and user data in `localStorage`.

7. **useFetch.js**: A custom hook to fetch data from the API and handle loading, data, and errors.

## 4. **Authentication**

### Login Flow:

1. Users can log in through the `/login` route by entering dummy credentials.
2. On successful login, an authentication token is returned, which is saved in `localStorage`.
3. After login, the user is redirected to the `/profile` page, where their personal data is displayed.
4. The token is sent with the request to fetch the authenticated user’s data.

#### Token Storage:
- The token is stored in `localStorage` with the key `accessToken`.
- The login state (`isLoggedIn`) is also persisted in `localStorage`.

### Protected Routes:
- The `/profile` route is protected and only accessible to logged-in users.
- If a user is not authenticated, they are redirected to the `/login` page.

## 5. **API Integration**

The project uses [DummyJSON](https://dummyjson.com/) as the API for both user data and authentication.

### API Endpoints:

- **Fetch Users**: `GET https://dummyjson.com/users?limit={limit}`
- **Search Users**: `GET https://dummyjson.com/users/search?q={searchQuery}`
- **User Authentication**: `POST https://dummyjson.com/user/login`
- **Get Authenticated User**: `GET https://dummyjson.com/user/me` (requires token)

### Example Login Request:

```js
const response = await fetch('https://dummyjson.com/user/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username, password, expiresInMins: 60 }),
});
```

### Example Profile Fetch Request:

```js
const response = await fetch('https://dummyjson.com/user/me', {
  headers: {
    'Authorization': `Bearer ${token}`,
  },
});
```

## 6. **Styling**

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. Tailwind allows for responsive and utility-based design with minimal CSS.

### Example Button Styling:

```html
<button
  className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-4/5 p-12 m-5 mx-52 hover:scale-110 transition-all duration-300"
  onClick={() => setLimit(limit + 10)}
>
  Load More
</button>
```

## 7. **Persistence**

- User login status, authentication token, and user data are stored in `localStorage` so that the state persists across browser sessions.
- On app initialization, the `useEffect` hook in `App.js` checks for stored login data and updates the app state accordingly.

## 8. **Running the Application**

After cloning the repository and installing the dependencies, run the following command:

```bash
npm start
```

### You can then log in using any dummy credentials supported by the API userName and password (e.g.,  `emilys`, `emilyspass`). Once logged in, you’ll be able to access the Profile page and view personalized user data.

## 9. **Future Improvements**

- **Form Validation**: Add validation to the login form to improve the user experience.
- **State Management**: Integrate a state management library like Redux for more scalable state management.
- **Error Handling**: Improve error handling for API requests, such as showing user-friendly error messages.
- **UI Improvements**: Enhance the design and responsiveness of the components.