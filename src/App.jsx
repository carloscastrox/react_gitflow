import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Header } from './features/landing/Header'
import { Footer } from './features/landing/Footer'
import { Main } from './features/landing/Main'

import './App.css'

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
  )
}

export default App