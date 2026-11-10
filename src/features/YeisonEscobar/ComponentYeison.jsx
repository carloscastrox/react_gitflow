import React from 'react'

export const ComponentYeison = () => {
  // URL la ruta local o web de  foto de perfil
  const avatarUrl = "https://avatars.githubusercontent.com/u/133880192?v=4";

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.imageWrapper}>
          <img src={avatarUrl} alt="Foto Yeison Escobar" style={styles.image} />
        </div>

        <h2 style={styles.title}>Ficha de Estudiante</h2>

        <div style={styles.infoContainer}>
          <div style={styles.infoRow}>
            <span style={styles.label}>Nombre:</span>
            <span style={styles.value}>Yeison Eduardo Escobar</span>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>Ambiente:</span>
            <span style={styles.value}>703</span>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>Programa:</span>
            <span style={styles.badge}>ADSO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Estilos limpios y visualmente atractivos
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
    border: "1px solid #e0e0e0",
    padding: "24px",
    maxWidth: "320px",
    width: "100%",
    textAlign: "center",
  },
  imageWrapper: {
    marginBottom: "16px",
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #3b82f6",
  },
  title: {
    margin: "0 0 16px 0",
    fontSize: "1.25rem",
    color: "#1e293b",
    borderBottom: "2px solid #f1f5f9",
    paddingBottom: "8px",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    textAlign: "left",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.95rem",
  },
  label: {
    fontWeight: "600",
    color: "#64748b",
  },
  value: {
    color: "#0f172a",
    fontWeight: "500",
  },
  badge: {
    backgroundColor: "#eff6ff",
    color: "#2563eb",
    padding: "4px 10px",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "0.85rem",
  },
};

export default ComponentYeison;