import { MdOutlineWhatsapp } from "react-icons/md";

import { CardSection } from "./style";

import { Link } from "react-router-dom";

export default function ServiceCard({direction, title, textContent, img, icon, linkWhats}) {
  return (
    <CardSection>
      <div className={direction == "normal" ? "content flex-normal" : "content flex-reverse"}>
        <div className="info">
          <header className="title flex" alt={""}>
            <div className="img flex">
              <img src={icon} alt={`Icone para representar o serviço empecializado em ${title}`}/>
            </div>            
            <h2>{title}</h2>            
          </header>
          
          <main>
            <p>
              {textContent}
            </p>
          </main>

          <footer className="know-more flex">
            <a href={linkWhats} target="blank">
              <MdOutlineWhatsapp className="whatsapp"/>
            </a>
            <button><Link to={"#"}>Ver Mais</Link></button>
          </footer>

        </div>
        <aside className="image">
          <img src={img}/>
        </aside>
      </div>
    </CardSection>
  )
}