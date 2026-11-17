import imgCarlos from '../../assets/imgcarlos.jpg'

export const Componentcarlosnarvaez = () => {
  return (
    <article
      className="card mx-auto w-100 border rounded-4 shadow-sm"
      style={{ maxWidth: '30rem' }}
    >
      <div className="card-body p-4 p-sm-5 text-center">
        <img
          src={imgCarlos}
          alt="Retrato de Carlos Narvaez"
          width="120"
          height="120"
          className="mb-4 rounded-circle border object-fit-cover"
          style={{ width: 'clamp(6.5rem, 24vw, 7.5rem)', height: 'clamp(6.5rem, 24vw, 7.5rem)' }}
        />
        <h2 className="h4 fw-semibold mb-1">Carlos Narvaez</h2>
        <p className="text-body-secondary mb-3">Integrante del equipo</p>
        <span className="small text-body-secondary">Ficha 3494620</span>
        <hr className="my-4" />
        <p className="small text-body-secondary mb-0">
          Colaborando en el desarrollo del proyecto con organización y trabajo en equipo.
        </p>
      </div>
    </article>
  )
}

export default Componentcarlosnarvaez
