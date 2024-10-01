import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import UserCard from './components/UserCard';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserData = localStorage.getItem('userData');
    const storedToken = localStorage.getItem('accessToken');

    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
    }

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('https://dummyjson.com/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, expiresInMins: 60 }),
      });
      const data = await response.json();
      if (data.id) {
        setIsLoggedIn(true);
        setUserData(data);
        setToken(data.accessToken);
        console.log(data);
        // Store the token securely (e.g., in localStorage)
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('userData', JSON.stringify(data));
        localStorage.setItem('isLoggedIn', 'true');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userData');
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserCard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/profile" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <Profile
            
               token={token}
               />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;