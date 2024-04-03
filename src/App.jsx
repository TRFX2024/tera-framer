import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hacemos from './pages/Hacemos/Hacemos'
import Home from './pages/Home/Home'
import Nosotros from './pages/Nosotros/Nosotros'

function App() {


  return (
    <>
      <div className="pages" id='Inicio'>
        <Navbar />
      </div>
      <div className="pages" id='Home'>
        <Home />
      </div>
      <div className="pages" id="Quiénes somos">
        <Nosotros  />
      </div>
      <div className="pages"  id="Contacto">
        <Hacemos/>
      </div>
    </>
  )
}

export default App
