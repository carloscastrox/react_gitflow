import React, { useState } from "react";
import { Componentcarlos } from "../carloscastro/Componentcarlos";
// Aquí puedes importar otros componentes según sea necesario
import Componentpablo from "../juanpablo/ComponentPablo";
// Aquí puedes importar otros componentes según sea necesario
export const Main = () => {
  const [activeComponentId, setActiveComponentId] = useState(null);

  // Generación de los 25 componentes con sus respectivos nombres
  const cardsData = Array.from({ length: 25 }, (_, i) => {
    const id = i + 1;
    let componentName = `Componente${id}`;
    let ComponentPablo = `Componente${id}`;

    if (id === 1) componentName = "Component carlos";
    // Agregar la lógica para otros componentes según sea necesario
    else if (id === 2) ComponentPablo = "ComponentPablo";
    else if (id === 3) componentName = "Componente2";
    else if (id === 4) componentName = "Componente2";
    else if (id === 5) componentName = "Componente2";
    else if (id === 6) componentName = "Componente2";
    else if (id === 7) componentName = "Componente2";
    else if (id === 8) componentName = "Componente2";
    else if (id === 9) componentName = "Componente2";
    else if (id === 10) componentName = "Componente2";
    else if (id === 11) componentName = "Componente2";
    else if (id === 12) componentName = "Componente2";
    else if (id === 13) componentName = "Componente2";
    else if (id === 14) componentName = "Componente2";
    else if (id === 15) componentName = "Componente2";
    else if (id === 16) componentName = "Componente2";
    else if (id === 17) componentName = "Componente2";
    else if (id === 18) componentName = "Componente2";
    else if (id === 19) componentName = "Componente2";
    else if (id === 20) componentName = "Componente2";
    else if (id === 21) componentName = "Componente2";
    else if (id === 22) componentName = "Componente2";
    else if (id === 23) componentName = "Componente2";
    else if (id === 24) componentName = "Componente2";
    else if (id === 25) componentName = "Componente2";
    return {
      id,
      name: componentName,
      title: `Módulo #${id}`,
      description: `Vista correspondiente al componente ${componentName}. Haz clic para abrir en el modal.`,
    };
  });

  // Renderizado dinámico del contenido dentro del modal según el ID seleccionado
  const renderModalContent = (id) => {
    if (id === 1) return <Componentcarlos />;
    // Agregar la lógica para otros componentes según sea necesario
    else if (id === 2)
      return (
        <div>
          <Componentpablo />
        </div>
      );
    else if (id === 3) return <div>Contenido del Componente 3</div>;
    else if (id === 4) return <div>Contenido del Componente 4</div>;
    else if (id === 5) return <div>Contenido del Componente 5</div>;
    else if (id === 6) return <div>Contenido del Componente 6</div>;
    else if (id === 7) return <div>Contenido del Componente 7</div>;
    else if (id === 8) return <div>Contenido del Componente 8</div>;
    else if (id === 9) return <div>Contenido del Componente 9</div>;
    else if (id === 10) return <div>Contenido del Componente 10</div>;
    else if (id === 12) return <div>Contenido del Componente 11</div>;
    else if (id === 13) return <div>Contenido del Componente 11</div>;
    else if (id === 14) return <div>Contenido del Componente 11</div>;
    else if (id === 15) return <div>Contenido del Componente 11</div>;
    else if (id === 16) return <div>Contenido del Componente 11</div>;
    else if (id === 17) return <div>Contenido del Componente 11</div>;
    else if (id === 18) return <div>Contenido del Componente 11</div>;
    else if (id === 19) return <div>Contenido del Componente 11</div>;
    else if (id === 20) return <div>Contenido del Componente 11</div>;
    else if (id === 21) return <div>Contenido del Componente 11</div>;
    else if (id === 22) return <div>Contenido del Componente 11</div>;
    else if (id === 23) return <div>Contenido del Componente 11</div>;
    else if (id === 24) return <div>Contenido del Componente 11</div>;
    else if (id === 25) return <div>Contenido del Componente 11</div>;
    const currentName = cardsData.find((c) => c.id === id)?.name;

    return (
      <div className="py-4 text-center">
        <h4 className="fw-bold mb-3">
          ¡Bienvenido a <span className="text-primary">{currentName}</span>!
        </h4>
        <p className="text-muted mb-0">
          Este es el contenedor del componente número {id}. Aquí puedes
          programar la lógica e interfaz específica de este módulo.
        </p>
      </div>
    );
  };

  return (
    <main className="container my-5 flex-grow-1" id="componentes">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1 className="fw-bold">Catálogo de 25 Componentes</h1>
          <p className="text-muted">
            Selecciona cualquier tarjeta para desplegar su respectivo componente
            en una ventana modal.
          </p>
        </div>
      </div>

      {/* Grid de 25 Tarjetas */}
      <div className="row g-4">
        {cardsData.map((card) => (
          <div key={card.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              className="card h-100 shadow-sm border"
              style={{
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onClick={() => setActiveComponentId(card.id)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-4px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <span
                    className={`badge mb-2 ${card.id <= 2 ? "bg-success" : "bg-secondary"}`}
                  >
                    ID: {card.id}
                  </span>
                  <h5 className="card-title h6 fw-bold">{card.title}</h5>
                  <p className="card-text small text-muted">
                    {card.description}
                  </p>
                </div>
                <button
                  className={`btn btn-sm mt-3 w-100 text-truncate ${card.id <= 2 ? "btn-success" : "btn-outline-primary"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveComponentId(card.id);
                  }}
                >
                  {card.name}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Bootstrap */}
      {activeComponentId !== null && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          onClick={() => setActiveComponentId(null)}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content shadow-lg">
              <div className="modal-header border-bottom">
                <h5 className="modal-title fw-bold">
                  {cardsData.find((c) => c.id === activeComponentId)?.name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setActiveComponentId(null)}
                  aria-label="Cerrar"
                ></button>
              </div>
              <div className="modal-body">
                {renderModalContent(activeComponentId)}
              </div>
              <div className="modal-footer border-top">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setActiveComponentId(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
