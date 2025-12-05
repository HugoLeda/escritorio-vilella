import { FaCheckCircle } from "react-icons/fa"
import styled from "styled-components";
import Theme from "../../styles/theme";
import { useEffect, useRef } from "react";

const HighlightsSection = styled.div`
  .container {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
  }

  p {    
    color: ${Theme.colors.gray1};
  }

  h3 {
    font-size: ${Theme.textSize.titleClientXxSm};
    color: ${Theme.colors.blue};
    margin: 0;
  }

  .card {
    align-items: center;
    border-radius: 8px;
    padding: 1.5rem 2rem;
    gap: 2rem;
    max-width: 300px;
    box-shadow: 0 2px 10px rgba(104, 102, 233, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-height: 400px;
    user-select: none;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 16px rgba(0, 38, 255, 0.2);
    }
  }


  .topics {
    gap: 1.5rem; 
    align-items: flex-start;
  }

  .topic {
    display: flex;
    align-items: center;

    gap: 1rem;
    text-align: left;
    align-items: center;    
    p {
      font-size: ${Theme.textSize.textSm};
      margin:0;
    }
  }

  @media (max-width: 1200px) {
    .container {
    p {
      font-size: ${Theme.textSize.textMobileSm};
    }
    }
  }


  @media (max-width: 1140px) {
    .container {
      flex-wrap: wrap;

      .card {
        box-shadow: 0 4px 16px rgba(0, 38, 255, 0.2);
        &:hover {
          transform: none;
        }
      }
    }

  }


`;

  const eachHighlight = [
    {
      title: "Planejamento",
      topics: [
        { icon: <FaCheckCircle style={{color: "#759dcc", fontSize: "24"}}/>, text: "Análise da situação atual da empresa" },
        { icon: <FaCheckCircle style={{color: "#759dcc", fontSize: "24"}}/>, text: "Aplicação de novos métodos contábeis"},
        { icon: <FaCheckCircle style={{color: "#759dcc", fontSize: "24"}}/>, text: "Monitoramento contínuo dos resultados" },
      ]
    },
    {
      title: "Benefícios",
      topics: [
        { icon: <FaCheckCircle style={{color: "#759dcc", fontSize: "24"}}/>, text: "Redução de riscos fiscais e operacionais" },
        { icon: <FaCheckCircle style={{color: "#759dcc", fontSize: "24"}}/>, text: "Suporte para decisões estratégicas" },
        { icon: <FaCheckCircle style={{color: "#759dcc", fontSize: "24"}}/>, text: "Otimização de tempo, custos e recursos" },
      ]

    },
    {
      title: "Diferencial",
      topics: [
        { icon: <FaCheckCircle style={{color: "#759dcc", fontSize: "24"}}/>, text: "Atendimento voltado às suas necessidades" },
        { icon: <FaCheckCircle style={{color: "#759dcc", fontSize: "24"}}/>, text: "Equipe especializada e comprometida" },
        { icon: <FaCheckCircle style={{color: "#759dcc", fontSize: "24"}}/>, text: "Soluções sob medida para seus objetivos" },
      ]
    }
  ];


export default function Highlights () {

  /*class .scroll-effect start*/

  const lastScrollY = useRef(0);

  useEffect(() => {
    let scrollDirection = "down";

    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        scrollDirection = "down";
      } else {
        scrollDirection = "up";
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) {
            el.classList.remove("fade-up", "fade-down");

            if (scrollDirection === "down") {
              el.classList.add("visible", "fade-up");
            } else {
              el.classList.add("visible", "fade-down");
            }
          } else {
            el.classList.remove("visible", "fade-up", "fade-down");
          }
        });
      },
      {
        threshold: 0.01,
      }
    );

    const elements = document.querySelectorAll(".scroll-effect");
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  /* class .scroll-effect END*/

  return (
    <HighlightsSection>
      <div className="container">
        {eachHighlight.map((card, index) => (
          <div key={index} className="card  scroll-effect">
            <h3 className="title">{card.title}</h3>
            <div className="topics flex-column">
              {card.topics.map((item, i) => (
                <div key={i} className="topic">
                  <span className="icon">{item.icon}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </HighlightsSection>
  )
}