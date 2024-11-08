import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import AuthPage from './components/AuthPage'
import Mission from './components/Mission'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

