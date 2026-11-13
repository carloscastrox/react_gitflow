import React from "react";
import imgjuanpablo from "../../assets/imgjuanpablo.png";
export default function Componentpablo() {
  return (
    <div style={estilos.contenedor}>
      <div style={estilos.tarjeta}>
        <img src={imgjuanpablo} alt="Foto de Juan Pablo" style={estilos.foto} />
        <h1 style={estilos.nombre}>Juan Pablo Zapata González</h1>
        <p style={estilos.dato}>
          <strong>Ficha:</strong> 3494620
        </p>
        <p style={estilos.dato}>
          <strong>Programa:</strong> Análisis y Desarrollo de Software (ADSO) -
          SENA
        </p>
      </div>
    </div>
  );
}

const estilos = {
  contenedor: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #e5e5e6, #e4e6eb)",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  tarjeta: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "30px",
    maxWidth: "380px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
  },
  foto: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #2a5298",
    marginBottom: "15px",
  },
  nombre: {
    fontSize: "24px",
    color: "#05080c",
    margin: "10px 0",
  },
  dato: {
    fontSize: "16px",
    color: "#020203",
    margin: "6px 0",
  },
  descripcion: {
    fontSize: "15px",
    color: "#555",
    marginTop: "15px",
    lineHeight: "1.5",
  },
};
