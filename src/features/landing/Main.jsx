import React, { useState } from 'react'
import { Componentcarlos } from '../carloscastro/Componentcarlos'
import { ComponentNata } from '../features/nataliasuarez/ComponentNata';
// Aquí puedes importar otros componentes según sea necesario




// Aquí puedes importar otros componentes según sea necesario
export const Main = () => {
  const [activeComponentId, setActiveComponentId] = useState(null);

  // Generación de los 25 componentes con sus respectivos nombres
  const cardsData = Array.from({ length: 25 }, (_, i) => {
    const id = i + 1;
    let componentName = `Componente${id}`;
    
    if (id === 1) componentName = 'Component carlos';
    if (id === 20) componentName = 'ComponentNata';
    // Agregar la lógica para otros componentes según sea necesario

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
    if (id === 20) return <ComponentNata />;
    // Agregar la lógica para otros componentes según sea necesario
    
    const currentName = cardsData.find(c => c.id === id)?.name;
    
    return (
      <div className="py-4 text-center">
        <h4 className="fw-bold mb-3">¡Bienvenido a <span className="text-primary">{currentName}</span>!</h4>
        <p className="text-muted mb-0">
          Este es el contenedor del componente número {id}. Aquí puedes programar la lógica e interfaz específica de este módulo.
        </p>
      </div>
    );
  };

  return (
    <main className="container my-5 flex-grow-1" id="componentes">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <p className="h1 fw-bold">Catálogo de 25 Componentes</p>
          <p className="text-muted">Selecciona cualquier tarjeta para desplegar su respectivo componente en una ventana modal.</p>
        </div>
      </div>

      {/* Grid de 25 Tarjetas */}
      <div className="row g-4">
        {cardsData.map((card) => (
          <div key={card.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div 
              className="card h-100 shadow-sm border"
              style={{ cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onClick={() => setActiveComponentId(card.id)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <span className={`badge mb-2 ${card.id <= 20 ? 'bg-success' : 'bg-secondary'}`}>
                    ID: {card.id}
                  </span>
                  <p className="h5 card-title h6 fw-bold">{card.title}</p>
                  <p className="card-text small text-muted">{card.description}</p>
                </div>
                <button 
                  className={`btn btn-sm mt-3 w-100 text-truncate ${card.id <= 20 ? 'btn-success' : 'btn-outline-primary'}`}
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
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          onClick={() => setActiveComponentId(null)}
        >
          <div 
            className="modal-dialog modal-lg modal-dialog-centered" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content shadow-lg">
              <div className="modal-header border-bottom">
                <h5 className="modal-title fw-bold">
                  {cardsData.find(c => c.id === activeComponentId)?.name}
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
  )
}