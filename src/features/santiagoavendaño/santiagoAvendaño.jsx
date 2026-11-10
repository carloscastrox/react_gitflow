import React from 'react';

const Componentesantiago = () => {
  const nombreCompleto = "Santiago Avendaño Zapata";
  const numeroFicha = "3494620";
  const programa = "Estudiante de ADSO";
  const centro = "SENA";
  const ambiente = "703"; // ✅ Agregado
  const fotoUrl = "/foto.png";

  return (
    <div style={estilos.contenedor}>
      <div style={estilos.tarjeta}>
        <img 
          src={fotoUrl} 
          alt={`Foto de ${nombreCompleto}`} 
          style={estilos.foto}
        />
        <div style={estilos.informacion}>
          <h2 style={estilos.nombre}>{nombreCompleto}</h2>
          
          <p style={estilos.etiqueta}>Número de Ficha</p>
          <p style={estilos.dato}>{numeroFicha}</p>
          
          <p style={estilos.etiqueta}>Ambiente</p>
          <p style={estilos.dato}>{ambiente}</p>
          
          <p style={estilos.etiqueta}>Programa</p>
          <p style={estilos.dato}>{programa}</p>
          
          <p style={estilos.etiqueta}>Centro de Formación</p>
          <p style={estilos.dato}>{centro}</p>
        </div>
      </div>
    </div>
  );
};

const estilos = {
  contenedor: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "2rem"
  },
  tarjeta: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    padding: "3rem",
    maxWidth: "420px",
    width: "100%",
    textAlign: "center"
  },
  foto: {
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "2rem",
    border: "5px solid #2e7d32"
  },
  nombre: {
    fontSize: "1.6rem",
    color: "#2e7d32",
    margin: "0 0 1.5rem 0",
    fontWeight: "bold"
  },
  etiqueta: {
    fontSize: "0.85rem",
    color: "#777",
    margin: "1rem 0 0.25rem 0",
    textTransform: "uppercase",
    letterSpacing: "1px"
  },
  dato: {
    fontSize: "1.05rem",
    color: "#333",
    margin: "0",
    fontWeight: "600"
  }
};

export default Componentesantiago;
