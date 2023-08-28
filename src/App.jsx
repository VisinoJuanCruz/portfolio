import "bootstrap/dist/css/bootstrap-grid.css";
import "nes.css/css/nes.min.css";
import './App.css'

import Presentacion from "./components/Presentacion.jsx";
import Skills from "./components/Skills.jsx"
import Proyectos from "./components/Proyectos.jsx"
import Footer from "./components/Footer.jsx"



function App() {

  
  

 

  return (
    <div className="app-container nes-container is-dark with-title ">
      
      <Presentacion />
      <Skills />
      <Proyectos />
      <Footer />     
    </div>
  )
}

export default App
