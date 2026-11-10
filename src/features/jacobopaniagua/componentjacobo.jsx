import React, { useState } from 'react'

const styles = {
  card: {
    width: '320px',
    margin: '2rem auto',
    padding: '2.2rem 1.5rem',
    textAlign: 'center',
    background: 'linear-gradient(145deg, #1f2a44, #3b2f8f 55%, #7b4dff)',
    color: '#fff',
    borderRadius: '24px',
    boxShadow: '0 18px 40px rgba(31, 42, 68, 0.45)',
    fontFamily: '"Segoe UI", system-ui, sans-serif',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  foto: {
    width: '140px',
    height: '140px',
    objectFit: 'cover',
    borderRadius: '50%',
    border: '4px solid #ffd166',
    boxShadow: '0 0 0 6px rgba(255, 255, 255, 0.15), 0 8px 18px rgba(0, 0, 0, 0.35)',
  },
  nombre: {
    margin: '1.2rem 0 0.4rem',
    fontSize: '1.7rem',
    letterSpacing: '0.02em',
  },
  programa: {
    margin: 0,
    fontWeight: 700,
    letterSpacing: '0.25em',
    color: '#ffd166',
  },
  ambiente: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.4rem 1.2rem',
    background: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.35)',
    borderRadius: '12px',
    fontSize: '0.9rem',
  },
}

export const ComponentJacobo = () => {
  const [hover, setHover] = useState(false)

  return (
    <div
      style={{
        ...styles.card,
        transform: hover ? 'translateY(-8px) scale(1.03)' : 'none',
        boxShadow: hover
          ? '0 25px 50px rgba(123, 77, 255, 0.5)'
          : styles.card.boxShadow,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img style={styles.foto} src="/public/FotoJaco.jpeg" alt="Foto de Jacobo" />
      <h1 style={styles.nombre}>Jacobo Paniagua</h1>
      <p style={styles.programa}>ADSO</p>
      <p style={styles.ambiente}>Ambiente 703</p>
    </div>
  )
}