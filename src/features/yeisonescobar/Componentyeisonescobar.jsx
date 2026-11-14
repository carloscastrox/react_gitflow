import React from "react";

export const Componentyeisonescobar = () => {
  return (
    <div
      className="card shadow-sm p-4 text-center mx-auto"
      style={{ maxWidth: "400px" }}
    >
      {/* Contenedor de la foto */}
      <div className="mb-3">
        <img
          src="../../assets/imgyeisonescobar.jpg"
          alt="Yeison Escobar"
          className="rounded-circle img-thumbnail"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />
      </div>

      {/* Título requerido */}
      <h3 className="fw-bold text-success mb-2">
        ¡Componente de Yeison Escobar Activo!
      </h3>

      {/* Nombre y programa */}
      <h4 className="h5 fw-bold text-dark mb-1">Yeison Escobar</h4>
      <p className="text-secondary fw-semibold mb-2">
        ADSO - Análisis y Desarrollo de Software
      </p>

      {/* Información del SENA */}
      <span className="badge bg-success mb-3">SENA • Ambiente 703</span>

      {/* Descripción corta */}
      <p className="text-muted small mb-0">
        Apasionado por el desarrollo full-stack, la optimización de sistemas y
        la creación de experiencias web eficientes.
      </p>
    </div>
  );
};
