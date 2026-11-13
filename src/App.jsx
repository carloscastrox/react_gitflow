feature/isabellazambrano
import ComponetNata from './features/nataliasuarez/ComponentNata'
import './App.css'

function App() {
  return (
    <main style={{ padding: '40px 20px', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f6f8' }}>
      <ComponetNata />
    </main>

import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Header } from './features/landing/Header'
import { Footer } from './features/landing/Footer'
import { Main } from './features/landing/Main'

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
develop
  )
}

export default App