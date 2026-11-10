import React from "react";
import fotoJuanPablo from "../../assets/fotojuanpablo.png";

const estilos = {
  tarjeta: {
    width: "280px",
    margin: "20px auto",
    padding: "24px 20px",
    background: "#1f2937",
    color: "#f9fafb",
    border: "1px solid #ddd",
    borderRadius: "14px",
    boxShadow: "0 8px 24px rgba(255, 255, 255, 0.12)",
    textAlign: "center",
  },
  foto: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "50%",
    border: "3px solid #ddd",
    marginBottom: "18px",
  },
  nombre: {
    fontSize: "1.8rem",
    lineHeight: 1.25,
    margin: "0 0 12px",
  },
  dato: {
    margin: "4px 0",
    fontSize: "0.95rem",
  },
  etiqueta: {
    fontWeight: "bold",
  },
};

export const ComponentPablo = ({
  foto = fotoJuanPablo,
  nombre = "Juan Pablo Zapata González",
  ambiente = "703",
  formacion = "Análisis y Desarrollo de Software",
}) => {
  return (
    <article style={estilos.tarjeta}>
      <img style={estilos.foto} src={foto} alt={`Foto de ${nombre}`} />
      <h2 style={estilos.nombre}>{nombre}</h2>
      <p style={estilos.dato}>
        <span style={estilos.etiqueta}>Ambiente:</span> {ambiente}
      </p>
      <p style={estilos.dato}>
        <span style={estilos.etiqueta}>Formación:</span> {formacion}
      </p>
    </article>
  );
};
