/*
@application    : main javascript frontend file for JobKing application
@description    : This file is the entry point for the React application. It sets up the React environment,
                  including StrictMode and BrowserRouter for routing, and renders the main App component
                  into the root DOM element.
@author         : Rafaiz Ghazian Lusaid
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
