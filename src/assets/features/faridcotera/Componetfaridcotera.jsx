import React from 'react'

const Componentfaridcotera = () => {
  const styles = {
    container: {
      marginTop: '50px',
      textAlign: 'center',
      fontFamily: 'sans-serif',
    },
    photo: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
  }

  return (
    <section style={styles.container} aria-label="Ficha personal">
      <img
        src="public/imgFarid.jpg"
        alt="Foto de perfil de Farid Daniel Cotera Higuita"
        style={styles.photo}
      />
      <h1>Farid Daniel Cotera Higuita</h1>
      <p>
        <strong>Ficha:</strong> 3494620
      </p>
    </section>
  )
}

export default Componentfaridcotera
