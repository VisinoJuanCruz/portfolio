import "./skills.css"

export default function Skills() {

    const TECH = [{tech:"HTML",
    stars:4
    },
    {tech:"CSS",
    stars:4
  },{
    tech:"JavaScript",
      stars:4
  },{
    tech:"React",
      stars:4},
      {
      tech:"Node.js",
      stars:3
    },
    {
      tech:"Express",
      stars:3
    },
    {
      tech:"MongoDB",
      stars:4
    },
    {
      tech:"MySQL",
      stars:4
    },
    {
      tech:"Django",
      stars:3
    },
    {
      tech:"Python",
      stars:4
    },
  
      ]

return(
    <div className="nes-container is-dark with-title skills-container " style={{marginBottom:"15px"}}>
      <h2 className="title up"><i className="nes-icon like "></i> Skills</h2>
          <ul>
            {TECH.map((skill,index)  => {
              return(
                <li className="item-tecnologia up" key={skill.tech}>
              <div className="tecnologia">
                <p>{skill.tech}</p>
                </div>
                <div className="stars">
                  <div >
                    {Array(skill.stars).fill().map((star, index) => {
                      return <i className="nes-icon is-small star "></i>
                    })}
                  </div>
                  <div >
                    {Array(5 - skill.stars).fill().map((star, index) => {
                      return <i className="nes-icon is-empty is-small star "></i>
                    })}
                  </div>
                </div>
                
              </li>
              )
            })} 
            </ul>
      </div>
)
}