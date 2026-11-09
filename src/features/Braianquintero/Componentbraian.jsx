import React, { useState } from 'react'

const styles = {
  card: {
    width: '300px',
    margin: '2rem auto',
    padding: '2rem 1.5rem',
    textAlign: 'center',
    background: 'linear-gradient(160deg, #39a900, #00b4a6)',
    color: '#fff',
    borderRadius: '20px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)',
    fontFamily: '"Segoe UI", system-ui, sans-serif',
    transition: 'transform 0.3s ease',
  },
  foto: {
    width: '130px',
    height: '130px',
    objectFit: 'cover',
    borderRadius: '50%',
    border: '5px solid #fff',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
  },
  nombre: {
    margin: '1rem 0 0.3rem',
    fontSize: '1.6rem',
  },
  programa: {
    margin: 0,
    fontWeight: 600,
    letterSpacing: '0.1em',
  },
  ambiente: {
    display: 'inline-block',
    marginTop: '0.8rem',
    padding: '0.3rem 1rem',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '999px',
    fontSize: '0.9rem',
  },
}

export const ComponentBraian = () => {
  const [hover, setHover] = useState(false)

  return (
    <div
      style={{ ...styles.card, transform: hover ? 'translateY(-6px)' : 'none' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img style={styles.foto} src="/public/FotoPerfil.jpg" alt="Foto de Braian" />
      <h1 style={styles.nombre}>Braian Quintero</h1>
      <p style={styles.programa}>ADSO</p>
      <p style={styles.ambiente}>Ambiente 703</p>
    </div>
  )
}