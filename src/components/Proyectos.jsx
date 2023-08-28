import quizzImage from "../../public/quizzgame.jpg"
import calculatorImage from "../../public/calculator.jpeg"
import tictactoeImage from "../../public/tictactoe.jpeg"
import "./proyectos.css"

export default function Proyectos(){

const PROYECTOS = [{
        project:"Tematica",
        description: "Juego de preguntas sobre ciencia y tecnologia",
        img:quizzImage,
        link:"https://visinojuancruz.github.io/Quizz-client-production/",
        repository: "https://github.com/VisinoJuanCruz/Quizz-client-production",
        skills: [ "HTML", "CSS", "Javascript","React", "Node", "Express", "Mongoose", "Bootstrap",]
      
      },
    {
      project:"Pokedex",
      description: "Pokedex de pokemon",
      img:"https://files.cults3d.com/uploaders/17171951/illustration-file/a570d197-9754-4556-a237-5b6424107efa/Pokedex-1.jpeg",
      link:"https://github.com/visinojc/Pokedex",
      repository: "https://github.com/VisinoJuanCruz/pokemon-fullstack-jn",
      skills: [ "HTML", "CSS", "Javascript","React", "Node", "Express", "Bootstrap",]
    },
  {
    project:"Calculadora",
    description: "Calculadora para medir la productividad de los empleados",
    img:calculatorImage,
    link:"https://visinojuancruz.github.io/calculator/",
    repository: "https://github.com/VisinoJuanCruz/calculator",
    skills: [ "HTML", "CSS", "Javascript","React", "Bootstrap",]
  },{
    project:"Tic Tac Toe",
    description: "Juego de tres en linea",
    img:tictactoeImage,
    link:"https://visinojuancruz.github.io/tic-tac-toe/",
    repository: "https://github.com/VisinoJuanCruz/tic-tac-toe",
    skills: [ "HTML", "CSS", "Javascript","React", "Bootstrap",]
  }]

    return(
        <div className="proyectos nes-container is-dark with-title" style={{marginBottom:"15px"}}>
            <h2 className="title up-text"><i className="nes-icon trophy"></i> Proyectos</h2>
            <ul className="proyectos-container ">
            {PROYECTOS.map((project) => {
                return(
                    <li className="proyecto">
                        <div className="info-container">
                            <h3 className="proyecto-name">{project.project}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="img-container">
                            <img className="img-fluid foto-proyecto" alt="foto-perfil" src={project.img}/>
                            <div className="overlay">
                                {project.skills.map((skill,id) => {
                                    return(
                                        <span>{skill}</span>
                                    )
                                    })
                                    }
                                
                            </div>
                            
                        </div>
                        <div className="btn-container">
                            <a target="_blank "href={project.link}>
                                <button className="nes-btn">
                                    Ver proyecto
                                </button>
                            </a>
                            <a target="_blank "href={project.repository}>
                                <button className="nes-btn">
                                    Ver repositorio
                                </button> 
                            </a>
                        </div>
                    </li>)})}
            </ul>
        </div>
    )
}