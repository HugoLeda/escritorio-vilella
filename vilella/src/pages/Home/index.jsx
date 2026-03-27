import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ServiceSpecialty from "../../components/ServiceSpecialty";
import LgpdActions from "../../components/LgpdActions";
import Theme from "../../styles/theme";

import app from "../../assets/apponvio.webp"

import { useState, useEffect, useRef } from "react";

import { Homepage } from "./style";
import { FaMobileScreen, FaRegClock, FaRegLightbulb, FaDatabase, FaBook, FaPiggyBank, FaBuilding, FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaArrowRight } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { MdAccountBalance, MdAnalytics, MdBadge, MdMailOutline, MdOutlineLocationOn, MdOutlinePhone, MdOutlineWatchLater, MdSpeed, MdTrendingUp } from "react-icons/md";



const serviceSpecialty = [
  {
    icon: <MdAccountBalance style={{fontSize: 80, color: "#0d2daa"}} />,
    title:"Abertura de empresas",
    text:"Legalização e suporte completo para novos negócios.",
    bgColor: Theme.colors.blue2,
    arrow: <FaArrowRight style={{fontSize: 30, color: "#d8d8d8"}} />,
    link:"/services#business-consulting"
  },
  {
    icon: <MdTrendingUp style={{fontSize: 80, color: "#a8d0ff"}} />,
    title:"Gestão tributária",
    text:"Planejamento e otimização para redução de custos fiscais.",
    bgColor: Theme.colors.white,
    arrow: <FaArrowRight style={{fontSize: 30, color: "#d8d8d8"}} />,
    link:"/services?banner=fiscal#service-banner"
  },
  {
    icon: <MdBadge style={{fontSize: 80, color: "#759dcc"}} />,
    title:"Departamento pessoal",
    text:"Folha de pagamento, admissões, rescisões, regularização trabalhista.",
    bgColor: Theme.colors.babyBlue,
    arrow: <FaArrowRight style={{fontSize: 30, color: "#d8d8d8"}} />,
    link:"/services?banner=pessoal#service-banner"
  }
]


const lgpdActions = [
  {
    icon: <MdSpeed style={{fontSize: 48, color: "#fff"}}/>,
    title: "Otimização de processos",
    bgColor: Theme.colors.babyBlue
  },
  {
    icon: <FaRegLightbulb style={{fontSize: 32, color: "#fff"}}/>,
    title: "Soluções inteligentes",
    bgColor: Theme.colors.blue2
  },
  {
    icon: <FaDatabase style={{fontSize: 32, color: "#fff"}}/>,
    title: "Proteção de dados",
    bgColor: Theme.colors.blue3
  },
  {
    icon: <FaBook style={{fontSize: 32, color: "#fff"}}/>,
    title: "Conformidade com a LGPD",
    bgColor: Theme.colors.red2
  }
];


export default function Home() {  

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

  return(
    <>
      <Header page="home" />
      <Banner/>
      <Homepage>
        <main>
          <section id="solutions" className="flex-column">
            <div className="solutions flex items wrapper scroll-effect">
              <div className="solution-text text">                
                <div><span>Soluções</span></div>
                <div className="text flex-column">
                  <h1>Sua consultoria <br/>contábil de confiança</h1>
                  <p>Há 35 anos ajudando empresas a simplificar a gestão contábil e reduzir custos com soluções personalizadas.</p>
                  <div className="know-more flex">
                    <button><a href="/about">Saiba mais sobre o Escritório Vilella</a></button>
                  </div>
                </div>
              </div>
              <div className="for-you flex-column">
                <div className="for-you-item flex">
                  <div>
                    <span><FaPiggyBank style={{fontSize: 42, color: "#f33", border: "1px solid #f33", borderRadius: "8px", padding: ".5rem" }}/></span>
                  </div>
                  <div><p>Redução de custos tributários para empresas de todos os portes.</p></div>
                </div>
                <div className="for-you-item flex">
                  <div>
                    <span><FaBuilding style={{fontSize: 42, color: "#a8d0ff", border: "1px solid #93c5ff", borderRadius: "8px", padding: ".5rem" }}/></span>
                  </div>
                  <div><p>Consultoria contábil e empresarial para cada tipo de negócio.</p></div>
                </div>
                <div className="for-you-item flex">
                  <div>
                    <span><MdAnalytics style={{fontSize: 42, color: "#1a3a8a", border: "1px solid #1a3a8a", borderRadius: "8px", padding: ".5rem" }}/></span>
                  </div>
                  <div><p>Suporte completo desde a abertura até o planejamento tributário.</p></div>
                </div>
              </div>
            </div>
          </section>
          <section id="specialties" className="flex-column">
            <div className="specialties items flex-column wrapper scroll-effect">
              <div className="text items">
                <div><span>Áreas de atuação</span></div>
                <h2>Nossas especialidades</h2>
              </div>              
              <div className="specialty-items flex scroll-effect">
                {serviceSpecialty.map(service =>(
                  <ServiceSpecialty              
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    text={service.text}
                    arrow={service.arrow}
                    link={service.link}
                  />
                ))}
              </div>
              <div className="flex">
                <button><a href="/services">Ver todos os serviços</a></button>
              </div>
            </div>

          </section>
          <section id="tech-inovation" className="flex-column">
            <div className="tech-inovation items flex-column wrapper">
              <div className="text scroll-effect">
                <h2>Tecnologia e Inovação</h2>
                <p>Investimos continuamente em tecnologia e inovação para garantir a máxima confidencialidade das informações de nossos clientes.</p>
              </div>
              <div className="flex-column">
                <div className="tech-cards flex scroll-effect">                        
                  {lgpdActions.map(service => (
                    <LgpdActions
                      key={service.title}
                      icon={service.icon}
                      title={service.title}
                      bgColor={service.bgColor}
                    />                
                  ))}
                </div>
              </div>              
              <button><a href="/lgpd">Saiba mais sobre sua privacidade</a></button>
            </div>
          </section>
        </main>
        <section id="client-center" className="flex-column">
          <div className="client-center flex-column wrapper">
            
            <div className="client-center-content flex">              
              <div className="client-center-text text flex-column">                
                <div className="text scroll-effect"><span>Portal do Cliente</span></div>
                <h2 className="scroll-effect">Sua contabilidade <br />na <span>palma da mão</span></h2>
                <p className="scroll-effect">Acesse documentos, informações fiscais e muito mais a qualquer hora em qualquer lugar.</p>
                
                <div className="client-center-benefits flex">
                  <div className="icon flex-column scroll-effect">
                    <span><FaRegClock style={{fontSize: 40, color: "#a8d0ff"}}></FaRegClock></span>
                    <h3>Acesso 24/7</h3>
                  </div>
                  <div className="icon flex-column scroll-effect">
                    <span><FaShieldAlt style={{fontSize: 68, color: "#a8d0ff"}}></FaShieldAlt></span>
                    <h3>Segurança</h3>
                  </div>
                  <div className="icon flex-column scroll-effect">
                    <span><FaMobileScreen style={{fontSize: 40, color: "#a8d0ff"}}></FaMobileScreen></span>
                    <h3>Mobilidade</h3>
                  </div>
                </div>
              </div>
              <div className="img scroll-effect">
                <img src={app} alt="Download do aplicativo Onvio Portal do Cliente"/>
              </div>
            </div>

            <div className="text flex-column">
              <button> <a href="/client-center">Conhecer Portal do Cliente</a></button>
            </div>
          </div>          
        </section>
        <section id="find-us" className="flex-column">
          <div className="find-us flex-column items wrapper">             
            <div className="find-us-title text scroll-effect">
              <div><span>Onde nos encontrar</span></div>
              <h2>Estamos prontos para te apoiar</h2>
            </div>
            <div className="find-us-content flex scroll-effect">
              <div className="map-time flex-column">
                <div className="map flex-column">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.9730041908283!2d-49.51449542549472!3d-23.38919385528803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c1a540abcf309b%3A0x292c0f46692abb18!2sEscrit%C3%B3rio%20Cont%C3%A1bil%20Vilella!5e0!3m2!1spt-BR!2sbr!4v1714398045177!5m2!1spt-BR!2sbr" max-width="500" height="380" loading="lazy" frameborder="0"></iframe>
                  <div className="spot flex">
                    <span className="item">
                      <MdOutlineWatchLater style={{fontSize: 32, color: "#93c5ff"}} />
                    </span>
                    <div className="hours">
                      <h3>Horário de atendimento</h3>
                      <div className="flex">
                        <div className="business-hours flex">
                          <span>Segunda a Sexta: 09:00 - 11:00 | 13:00 - 16:00</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="where-to-find-us flex-column">
                <div className="spot flex-column">
                  <h2 className="flex">Entre em contato:</h2>
                  <div className="address flex">
                    <span><MdOutlineLocationOn style={{fontSize: 32, color: "#93c5ff"}} /></span>
                    <div>
                      <h3>Endereço</h3>
                      <p>R. Mario Monteiro de França, 256 - Centro, Fartura/SP - CEP: 18870-030</p>
                    </div>
                  </div>
                  <div className="phone flex">
                    <span><MdOutlinePhone style={{fontSize: 32, color: "#93c5ff"}} /></span>
                    <div className="">
                      <h3>Telefone</h3>
                      <p>(14) 3382-2052</p>
                      <p>(14) 99779-5080</p>
                    </div>                    
                  </div>
                  <div className="mail flex-column">
                    <a className="mail flex" href="mailto:contato@evilella.com">
                      <span className="item">
                        <MdMailOutline style={{fontSize: 32, color: "#93c5ff"}} />
                      </span>
                      <div>                
                        <h3>E-mail</h3>
                        <p>contato@evilella.com</p>
                      </div>
                    </a>                  
                  </div>
                  <div className="follow-us flex-column">
                    <h3>Nos siga nas redes sociais!</h3>
                    <div className="socials flex">
                      <a className="social-item" href="https://www.instagram.com/escritorio.vilella/" target="blank">
                        <span className="item"><FaInstagram style={{fontSize: 30, color: "#C13584"}}/></span>
                      </a>
                      <a className="social-item" href="https://www.facebook.com/people/Escrit%C3%B3rio-Vilella/61567020291268/" target="blank">
                        <span className="item"><FaFacebook style={{fontSize: 30, color: "#1877F2"}}/></span>
                      </a>
                      <a className="social-item" href="https://www.linkedin.com/company/escritoriovilella/" target="blank">
                        <span className="item"><FaLinkedin style={{fontSize: 30, color: "#0A66C2"}}/></span>
                      </a>
                      <a className="social-item" href="https://www.youtube.com/@escritorio.vilella" target="blank">
                        <span className="item"><FaYoutube style={{fontSize: 30, color: "#CD201F"}}/></span>
                      </a>
                    </div>
                  </div>
                </div>                                
              </div>
            </div>
          </div>
        </section>        
      </Homepage>
      <Footer/>
    </>
  )
}