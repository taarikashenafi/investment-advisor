import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import AuthPage from './components/AuthPage'
import Mission from './components/Mission'

function App() {
  return (
    
    <Router future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/features" element={<Features />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  )
}

export default App

