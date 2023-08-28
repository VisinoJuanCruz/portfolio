import "./footer.css"

export default function Footer(){

    return (
        <div className="footer nes-container is-dark with-title ">
        <h2 className="title up"><i className="nes-icon coin"></i> Contáctame</h2>
        <div className="contact-container">
          <a target="_blank "href="https://www.linkedin.com/in/visinojuancruz/">
            <button className="nes-btn"><i className="nes-icon linkedin is-small"></i> Linkedin</button>
          </a>
          <a target="_blank" href="mailto:visinodeveloper@gmail.com?subject=Ví%20tu%20porfolio,%20me%20interesa%20tu%20perfil&body=Contactame,%20quiero%20que%20piquemos%20codigo!">
            <button className="nes-btn"><i className="nes-icon gmail is-small"></i> Gmail</button>
          </a>
          <a target="_blank "href="https://github.com/VisinoJuanCruz">
            <button className="nes-btn"><i className="nes-icon github is-small "></i> Github</button>
          </a>
        </div>
      </div>
    )
}