import imgCarlos from '../../assets/imgcarlos.jpg'

export const ComponentCarlosNarvaez = () => {
  return (
    <article className="feature-card">
      <img
        src={imgCarlos}
        alt="Carlos Narvaez"
        width="140"
        height="140"
        style={{ borderRadius: '50%', objectFit: 'cover' }}
      />
      <span className="badge">Feature branch</span>
      <h2>Carlos Narvaez</h2>
      <p> Ficha: 3494620</p>
      <p>
        This workspace follows a GitFlow-friendly delivery rhythm: clear branches,
        reviewable pull requests, and a stable production line.
      </p>
      <p className="microcopy">feature/CarlosNarvaez → develop → release → main</p>
    </article>
  )
}

export default ComponentCarlosNarvaez
