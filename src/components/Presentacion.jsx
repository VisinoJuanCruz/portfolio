import "./presentacion.css"

export default function Presentacion(){

return (

<>
<h1 className="title down">Fullstack Developer</h1>
    <div className="presentation-container ">
      <div className="name-container ">
          
          <h2 className="up-text">Visino Juan Cruz</h2>
        </div>
        <div className="image-container up-shadow">
          <img className="foto-perfil img-fluid" alt="foto-perfil" src="https://avatars.githubusercontent.com/u/39799268?s=400&u=740c6bd9d67e477e93b7fe3f653c60da00bd463b&v=4"/>
        </div>
        
        
        <div className="about-me nes-container is-dark with-title">
          <h2 className="title up-text"><i className="nes-icon heart"></i> Sobre mi</h2>
          <p>Estudiante de informatica de la Universidad Nacional de La Plata, autodidacta y apasionado</p>
        </div>
      </div>
      </>)
}