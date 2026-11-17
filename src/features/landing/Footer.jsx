import React from 'react'

export const Footer = () => {
  return (
    <footer className="border-top py-3 mt-auto text-center">
      <div className="container">
        <p className="mb-0 text-muted small">
          &copy; {new Date().getFullYear()} Mi Aplicación React. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}