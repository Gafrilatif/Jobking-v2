/*
@application    : main application component for JobKing
@description    : This file defines the main App component for the JobKing application.
                  It sets up the basic structure of the application, including state management
                  and routing using React Router.
@author         : Rafaiz Ghazian Lusaid
*/

// import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
// import JobsPage from './pages/JobsPage.jsx'
// import JobDetailsPage from './pages/JobDetailsPage.jsx'
// import LoginPage from './pages/LoginPage.jsx'
import './App.css'

export default function App() {
  return <HomePage />
}

// function App() {
//   return (
//     <div className="app">
//       <header className="navbar">
//         <div className="navbar-inner">
//           <div className="navbar-left">
//             <div className="navbar-logo" />
//           </div>

//           <nav className="navbar-center">
//             <Link to="/">Explore</Link>
//             <a href="#why">Why JobKing?</a>
//             <a href="#support">Support</a>
//           </nav>

//           <div className="navbar-right">
//             <span className="navbar-lang">EN | ID</span>
//               <Link to="/login" className="btn btn-login">
//                 Login
//               </Link>
//               <Link to="/login" className="btn btn-signup">
//                 Sign Up
//               </Link>          
//           </div>            
//         </div>
//       </header>

//       <main>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/jobs" element={<JobsPage />} />
//           <Route path="/jobs/:id" element={<JobDetailsPage />} />
//           <Route path="/login" element={<LoginPage />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App
