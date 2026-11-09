import "./Perfilcss.css";
 
function obtenerIniciales(nombres, apellidos) {
  const primera = nombres.trim().charAt(0);
  const segunda = apellidos.trim().charAt(0);
  return `${primera}${segunda}`.toUpperCase();
}
 
function RetratoAprendiz({ nombreCompleto, iniciales, foto, enfoque }) {
  return (
    <div className="retrato">
      <div className="retrato__marco">
        {foto ? (
          <img
            className="retrato__foto"
            src={foto}
            alt={`Foto de perfil de ${nombreCompleto}`}
            width="960"
            height="947"
          />
        ) : (
          <span className="retrato__iniciales" role="img" aria-label={`Iniciales de ${nombreCompleto}`}>
            {iniciales}
          </span>
        )}
      </div>
      <p className="retrato__enfoque">{enfoque}</p>
    </div>
  );
}
 
function FormacionAprendiz({ programa, nivel, sigla }) {
  return (
    <dl className="formacion">
      <div className="formacion__item formacion__item--principal">
        <dt>Programa de formación</dt>
        <dd>{programa}</dd>
      </div>
      <div className="formacion__item">
        <dt>Nivel</dt>
        <dd>{nivel}</dd>
      </div>
      <div className="formacion__item">
        <dt>Sigla</dt>
        <dd className="formacion__sigla">{sigla}</dd>
      </div>
    </dl>
  );
}
 
export default function PerfilAprendiz({
  nombres = "Ronald Fernando",
  apellidos = "Luna Vidarte",
  foto,
  programa = "Tecnología en Análisis y Desarrollo de Software",
  sigla = "ADSO",
  nivel = "Formación tecnológica",
  enfoque = "Análisis y desarrollo de software",
}) {
  const nombreCompleto = `${nombres} ${apellidos}`;
  const iniciales = obtenerIniciales(nombres, apellidos);
 
  return (
    <section className="perfil" lang="es" aria-labelledby="perfil-nombre">
      <article className="perfil__tarjeta">
        <RetratoAprendiz
          nombreCompleto={nombreCompleto}
          iniciales={iniciales}
          foto={foto}
          enfoque={enfoque}
        />
 
        <div className="perfil__contenido">
          <h1 className="perfil__nombre" id="perfil-nombre">
            <span>{nombres}</span>
            <span>{apellidos}</span>
          </h1>
          <p className="perfil__rol">Aprendiz de formación tecnológica</p>
          <FormacionAprendiz programa={programa} nivel={nivel} sigla={sigla} />
        </div>
      </article>
    </section>
  );
}

