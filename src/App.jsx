import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EmpleadoList from './components/EmpleadoList'

function App() {

  return (
    <main>
      <h1 className='text-center fw-bolder my-2'>Ventana de administrador</h1>
    <EmpleadoList></EmpleadoList>
    </main>
  )
}

export default App
