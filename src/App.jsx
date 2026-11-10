import './App.css'
import ComponentNata from './features/nataliasuarez/ComponentNata'
import Componentesantiago from './features/santiagoAvendaño'
import { ComponetIsabella } from './features/isabellazambrano/ComponetIsabella'

function App() {
  return (
    <main className="app-showcase">
      <Componentesantiago />
      <ComponetIsabella />
      <ComponentNata />
    </main>
  )
}

export default App
