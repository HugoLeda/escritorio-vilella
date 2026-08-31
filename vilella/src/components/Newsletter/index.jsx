import { NewsletterStyle } from "./style";
import { useEffect, useState } from "react";
import { FaShare, FaShareFromSquare } from "react-icons/fa6";

function Newsletter() {
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    const publicServiceKey = "NTk4";

    fetch(
      `https://www.businessinformativos.com.br/Services/Informativos/json?auth=${publicServiceKey}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar os informativos");
        }

        return response.json();
      })
      .then((data) => {
        const url = data?.infos?.[0]?.hlink;

        if (url) {
          setIframeUrl(url);
          console.log(url);
        } else {
          throw new Error("Link do informativo não encontrado");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Erro ao carregar os informativos");
      });
  }, []);

  return (
    <NewsletterStyle>
      <div className="preview">
        <iframe
          id="estanteiframe"
          title="Informativo"
          src={iframeUrl}
          scrolling="no"
        />         
      </div>
    
      <div width="fit-content" style={{display:"flex", flexDirection:"column", paddingTop:"1rem", gap:".5rem"}}>
        <span>
          <a href={iframeUrl} target="_blank" rel="noreferrer"
          >
            <span>Fazer a leitura completa</span>
            <FaShareFromSquare style={{color:"#0d2daa", fontSize:"16"}}/>
          </a>
        </span>

        <span>
          <a href="https://www.businessinformativos.com.br/area-restrita/ver-revistas.php?uid=NTk4" target="_blank" rel="noreferrer"
          >
            <span>Ver estante virtual</span>
            <FaShareFromSquare style={{color:"#da1212", fontSize: "16"}}/>
          </a>
        </span>
      </div>
    </NewsletterStyle>
  );
}

export default Newsletter;
