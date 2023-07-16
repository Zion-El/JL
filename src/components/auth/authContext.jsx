import React, { createContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useErrorBoundary } from '../DashboardPages/dbpages/ErrorHandling';

export const AuthContext = createContext();

const MAX_INACTIVITY_DURATION = 5 * 60 * 1000; // 5 minutes

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lastActiveTimestamp, setLastActiveTimestamp] = useState(Date.now());
  const [userData, setUserData] = useState(null);

  
  // const catchError = useErrorBoundary();

  // // Code that might throw an error

  // // Manually catch the error and trigger error handling
  // const handleCatchError = () => {
  //   catchError();
  // };



  useEffect(() => {
    const handleActivity = () => {
      setLastActiveTimestamp(Date.now());
    };

    // Add event listeners to track user activity
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);

    // Check if there is a token in the localStorage and set the login state
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const info = localStorage.getItem('details')
      setUserData(JSON.parse(info))

    }

    return () => {
      // Clean up event listeners
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
    };

  }, []);

  useEffect(() => {
    const logoutAfterInactivity = setInterval(() => {
      const currentTime = Date.now();
      if (isLoggedIn && ((currentTime - lastActiveTimestamp) > MAX_INACTIVITY_DURATION)) {
        logout();
      }
    }, 1000);

    return () => {
      clearInterval(logoutAfterInactivity);
    };
  }, [isLoggedIn, lastActiveTimestamp]);



  const login = (token, userData) => {
    localStorage.setItem('token', token);
    localStorage.setItem('details', JSON.stringify(userData))
    setIsLoggedIn(true);
    setLastActiveTimestamp(Date.now());
    setUserData(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('details');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
