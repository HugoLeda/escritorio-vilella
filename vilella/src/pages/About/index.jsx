import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutValues from "../../components/AboutCoreValues";
import AboutAdvantages from "../../components/AboutAdvantages";
import AboutJourney from "../../components/AboutJourney";

import { Aboutpage } from "./style"
import { FaHandsHoldingCircle, FaRegEye, FaFlag, FaBriefcase, FaAward, FaUserTie, FaArrowDown } from "react-icons/fa6";
import { useEffect, useRef } from "react";


const excelenceCards = [
  {
    icon:<FaFlag style={{fontSize: 32}}/>,
    title:"Missão",
    text:"Proporcionar tranquilidade e sucesso aos clientes com soluções personalizadas e eficazes.",
    hoverColor:"#f33" 
  },
  {
    icon:<FaRegEye style={{fontSize: 32}}/>,
    title:"Visão",
    text:"Ser reconhecido pela excelência e satisfação daqueles que confiam em nosso trabalho diário.",
    hoverColor: "#93c5ff"
  },    
  {
    icon:<FaHandsHoldingCircle style={{fontSize: 32}}/>,
    title:"Valores",
    text:"Otimização de processos, responsabilidade, confiança e transparência em todas as relações.",
    hoverColor:"#759dcc"
  }    
];


const advantagesCards = [
  {
    icon: <FaAward style={{ fontSize: 32, color: "#fff" }} />,
    title: "Décadas de experiência",
    text: "Há 35 anos oferecendo serviços com conhecimento sólido, segurança e total conformidade fiscal, tributária e trabalhista."
  },
  {
    icon: <FaBriefcase style={{ fontSize: 32, color: "#fff" }} />,
    title: "Soluções digitais",
    text: "Investimos em tecnologia para garantir segurança e acesso rápido às suas informações, apoiando sua gestão diária. "
  },
  {
    icon: <FaUserTie style={{ fontSize: 32, color: "#fff" }} />,
    title: "Contabilidade consultiva",
    text: "Equipe especializada com atendimento próximo e preparada para indicar oportunidades de melhoria e crescimento."
  }
];

const journeyYears = [
  {
    year:"1993",
    description:"Início da gestão Vilella"
  },
  {
    year:"2008",
    description:"Informatização e migração de sistema"
  },    
  {
    year:"2011",
    description:"Expansão de atuação e atendimento regional"
  },    
  {
    year:"2015",
    description:"Nos tornamos ponto de atendimento para emissão de certificados digitais"
  },    
  {
    year:"2020",
    description:"Junção com a Organização Fartura de Contabilidade"
  },    
  {
    year:"2021",
    description:"Mudança para a nova sede, estruturada para atender melhor nossos clientes"
  },    
  {
    year:"2024",
    description:"Atendimento digital expandido para todo o território nacional"
  }
];

export default function About() {
  
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


  return(
    <>
      <Header page="about"/>      
        <Aboutpage>
          <header className="flex-column">  
            <div className="outdoor flex">            

              <div className="service-outdoor flex">
                <h1>
                  Há 35 anos construindo confiança e 
                  <span> soluções contábeis personalizadas</span>
                </h1>
                <p>Trabalhamos juntos para fazer sua empresa crescer.</p>

                <div className="link flex">
                  <a href="/about#timeline">
                    <button className="button">
                      <a href="/about#timeline">Acompanhe nossa jornada</a>
                    </button>
                  </a>
                </div>
              </div>

              <div className="img flex-column outdoor-cards decor-frames">
              </div>

            </div>

            <div className="next-section">
              <span><a href="/about#history"><FaArrowDown style={{ color: "#fff", fontSize: "16" }} /></a></span>
            </div>
          </header>

          <main>
            
            <section id="history" className="flex-column">
              <div className="history items wrapper flex">
                <div className="history-text items flex-column">
                  <div className="history-text-title flex-column">
                    <h2 className="scroll-effect">Quem somos</h2>
                    <span className="scroll-effect">Escritório Vilella</span>
                  </div>
                  <div className="">
                    <p className="scroll-effect">Com mais de três décadas de atuação, somos reconhecidos como um parceiro essencial para empresas que buscam segurança, clareza e suporte em todas as etapas do seu desenvolvimento.</p>
                    <p className="scroll-effect">Desde o início, nossa prioridade sempre foi oferecer um atendimento próximo, confiável e eficiente.</p>
                    <p className="scroll-effect">Trabalhamos para garantir que nossos clientes estejam sempre em conformidade com as exigências legais, mas, acima de tudo, focados no crescimento saudável e sustentável de seus negócios.</p>
                  </div>                  
                </div>
                <figure className="decor-frames flex scroll-effect">
                </figure>

              </div>
            </section>

            <section id="bsc" className="flex-column">
              <div className="bsc-items wrapper flex-column">

                <div className="excelence items flex-column">
                  <div className="excelence-text flex-column items">
                    <span className="scroll-effect">Missão, visão e valores</span>
                    <h2 className="scroll-effect">Compromisso com a <span>excelência</span></h2>
                  </div>
                  <div className="excelence-cards items flex scroll-effect">
                    {excelenceCards.map(service => (
                      <AboutValues
                        key={service.title}
                        icon={service.icon}
                        title={service.title}
                        text={service.text}
                        hoverColor={service.hoverColor}
                      />
                    ))}
                  </div>
                </div>
                <div className="advantages flex-column">
                  <div className="advantages-text flex-column items">
                    <h2 className="scroll-effect">Nosso <span>diferencial</span></h2>
                  </div>
                  <div className="advantages-cards flex">
                    {advantagesCards.map(service => (
                      <AboutAdvantages
                        key={service.title}
                        title={service.title}
                        text={service.text}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </section>
          
            <section id="timeline" className="flex-column">
              <div className="timeline items flex-column">
                <div className="timeline-text items flex-column">
                  <span className="scroll-effect">Marcos importantes</span>
                  <h2 className="scroll-effect">Nossa jornada</h2>            
                </div>
                <div className="flex-column items scroll-effect">
                  <div className="timeline-start-end flex-column">
                    <h4 className="scroll-effect">Início</h4>
                  </div>
                  <div className="timeline-between">
                    {journeyYears.map((service, index) => (
                      <AboutJourney
                        key={service.year}
                        year={service.year}
                        description={service.description}
                        side={index % 2 === 0 ? 'left' : 'right'}                        
                      />
                    ))}
                  </div>
                  <div className="timeline-start-end flex-column scroll-effect">
                    <h4 className="scroll-effect">Presente</h4>
                    <p className="scroll-effect">Três décadas de evolução nos trouxeram ao nível de excelência com que atuamos hoje, e seguimos comprometidos com a entrega de valor no nosso trabalho, para oferecer uma contabilidade moderna e transparente.</p>
                  </div>
                </div>
              </div>
            </section>

          </main>
          <section id="call-to-action" className="flex-column">
            <div className="call-to-action items wrapper flex-column scroll-effect">
              <div className="invite-text flex-column">
                <h2 className="">Faça parte da nossa história</h2>
                <p>Temos orgulho de tudo o que construímos até aqui e o melhor ainda está por vir. <span>Será um prazer ter você conosco nessa jornada!</span></p>
              </div>
              <div className="flex-column">
                <a href="https://wa.me/5514997396924?text=Quero%20ser%20cliente!" target="blank">
                  <button><a href="https://wa.me/5514997396924?text=Quero%20ser%20cliente!" target="blank">Quero ser cliente</a></button>
                </a>
              </div>              
            </div>
          </section>
          
        </Aboutpage>
      <Footer/>
    </>
  )

}