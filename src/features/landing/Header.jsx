import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="navbar navbar-expand-lg border-bottom shadow-sm px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Mi Aplicación
        </Link>

        <div className="d-flex align-items-center gap-3">
          <nav className="d-none d-md-flex gap-3 me-3">
            <Link to="/" className="nav-link">Inicio</Link>
          </nav>

          <button 
            className={`btn btn-sm ${theme === 'dark' ? 'btn-light' : 'btn-dark'} d-flex align-items-center justify-content-center px-2 py-1`}
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            style={{ width: '32px', height: '32px' }}
          >
            {theme === 'dark' ? (
              <i className="bi bi-sun-fill" style={{ fontSize: '1rem' }}></i>
            ) : (
              <i className="bi bi-moon-fill" style={{ fontSize: '0.9rem' }}></i>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}