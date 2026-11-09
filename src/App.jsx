import './App.css'
import ComponentNata from './features/nataliasuarez/ComponentNata'
import { ComponetIsabella } from './features/isabellazambrano/ComponetIsabella'

function App() {
  return (
    <main
      style={{
        padding: '40px 20px',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        backgroundColor: '#f4f6f8',
      }}
    >
      <ComponetIsabella />
      <ComponentNata />
    </main>
  )
}

export default App