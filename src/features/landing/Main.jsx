import React, { useState } from 'react'
import { Componentcarlos } from '../carloscastro/Componentcarlos'

// Aquí puedes importar otros componentes según sea necesario
import { ComponentThomas } from "../thomascano/Componentethomas";
import { Componentesantiago } from '../santiagozapata/santiagozapata'
import { Ronaldlunacom } from '../ronaldluna/Ronaldlunacom'
import { Componentmarria as ComponentMaria } from '../mariarivera/ComponenMaria'
import { Componentkevin } from '../kevinosorio/Componentkevin'
import { Componentpablo } from "../juanpablo/Componentpablo";
import { Componentmaya } from '../juanmaya/Componentmaya'
import { Componentismael } from '../ismaeldiaz/componentismael'
import { Componentjohn } from '../johndiaz/Componentjohn'
import Componentjoan from '../joanrios/Componentjoan.jsx'
import { ComponentJacobo } from '../jacobopaniagua/componentjacobo'
import { Componentisabella } from '../isabellazambrano/Componentisabella'
import { Componentfarid } from '../faridcoterah/Componentfarid'
import {Componentcarlosnarvaez} from '../carlosnarvaez/Componentcarlosnarvaez';
import { ComponentBraian } from '../Braianquintero/Componentbraian'
import Componentcamilocordoba from "../camilocordoba/Componentcamilocordoba"
import { ComponentAngie } from '../angierodriguez/Componentangie'
import { ComponentAleja } from '../alejandralondoño/ComponentAleja'



//Aquí puedes importar otros componentes según sea necesario
export const Main = () => {
  const [activeComponentId, setActiveComponentId] = useState(null);

  // Generación de los 25 componentes con sus respectivos nombres
  const cardsData = Array.from({ length: 25 }, (_, i) => {
    const id = i + 1;
    let componentName = `Componente${id}`;
    
    if (id === 1) componentName = 'Component carlos';

    // Agregar la lógica para otros componentes según sea necesario
    if (id === 24) componentName = 'Component Thomas';
    //Falta el componente 23
    if (id === 22) componentName = 'Component santiago';
    if (id === 21) componentName = 'Component ronald';
    //Falta el componente 20
    if (id === 19) componentName = 'Component María';
    //Falta el componente 18
    if (id === 17) componentName = 'Component kevin';
    if (id === 16) componentName = "Component pablo";
    if (id === 15) componentName = 'Component maya';
    if (id === 14) componentName = 'Component ismael';
    //Falta el componente 13
    if (id === 12) componentName = 'Component john';
    if (id === 11) componentName = 'Component joan';
    if (id === 10) componentName = 'Component jacobo';
    if (id === 9) componentName = 'Component isabella';
    if (id === 8) componentName = 'Component farid';
    if (id === 7) componentName = 'Component carlos Narvaez';
    if (id === 6) componentName = 'Component braian';
    if (id === 5) componentName = 'Component Angie';
    if (id === 4) componentName = 'Component Camilo';
    //Falta el componente 3
    if (id === 2) componentName = 'Component Aleja';
   
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
    if (id === 24) return <ComponentThomas/>;
    if (id === 22) return <Componentesantiago />;
    if (id === 21) return <Ronaldlunacom />;
    if (id === 19) return <ComponentMaria />;
    if (id === 17) return <Componentkevin />;
    if (id === 16) return <Componentpablo />;
    if (id === 15) return <Componentmaya />;
    if (id === 14) return <Componentismael />;
    if (id === 12) return <Componentjohn />;
    if (id === 11) return <Componentjoan />;
    if (id === 10) return <ComponentJacobo />;
    if (id === 9) return <Componentisabella />;
    if (id === 8) return <Componentfarid />;
    if (id === 7) return <Componentcarlosnarvaez />;
    if (id === 6) return <ComponentBraian />;
    if (id === 5) return <ComponentAngie />;
    if (id === 4) return <Componentcamilocordoba />;
    if (id === 2) return <ComponentAleja />;    

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
          <p className="h1 fw-bold">Catálogo de 26 Componentes</p>
          <p className="text-muted">Selecciona cualquier tarjeta para desplegar su respectivo componente en una ventana modal.</p>
        </div>
      </div>

      {/* Grid de 26 Tarjetas */}
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
                  <span className={`badge mb-2 ${card.id <= 24 ? 'bg-success' : 'bg-secondary'}`}>
                    ID: {card.id}
                  </span>
                  <h5 className="card-title h6 fw-bold">{card.title}</h5>

                  <p className="card-text small text-muted">{card.description}</p>
                </div>

                <button 
                  className={`btn btn-sm mt-3 w-100 text-truncate ${card.id <= 24 ? 'btn-success' : 'btn-outline-primary'}`}

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
