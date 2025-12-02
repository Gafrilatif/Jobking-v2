/*
@application    : main application component for JobKing
@description    : This file defines the main App component for the JobKing application.
                  It sets up the basic structure of the application, including state management
                  and routing using React Router.
@author         : Rafaiz Ghazian Lusaid
*/

import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import JobsPage from './pages/JobsPage.jsx'
import JobDetailsPage from './pages/JobDetailsPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="navbar-inner">
          
        </div>
      </header>
    </div>
  );
}

export default App
