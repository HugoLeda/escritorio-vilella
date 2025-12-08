import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/ServiceBanner";
import Actions from "../../components/LgpdActions"
import Highlights from "../../components/ServiceHighlights";

import financial from "../../assets/services/financial.webp";

import { Servicespage } from "./style";
import { MdFactory, MdHealthAndSafety, MdMailOutline, MdOutlinePhone, MdOutlineShoppingCart, MdOutlineWhatsapp, MdRequestQuote, MdTrendingUp } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { FaArrowDown, FaBriefcase, FaBuildingCircleArrowRight, FaBuildingCircleCheck, FaMedal } from "react-icons/fa6";

import Theme from "../../styles/theme";
import { useState, useEffect, useRef } from "react";


const solutionActions = [
  {
    icon: <MdOutlineShoppingCart style={{fontSize: 32, color: "#fff"}}/>,
    title: "Comércio",
    text: "Serviços adaptados ao seu setor comercial",
    bgColor: Theme.colors.blue2
  },
  {
    icon: <MdRequestQuote style={{fontSize: 32, color: "#fff"}}/>,
    title: "Serviço",
    text: "Melhores soluções para prestadores de serviço",
    bgColor: Theme.colors.babyBlue

  },
  {
    icon: <MdFactory style={{fontSize: 32, color: "#fff"}}/>,
    title: "Indústria",
    text: "Conte com planejamento tributário especializado",
    bgColor: Theme.colors.red1
  },
  
  {
    icon: <MdHealthAndSafety style={{fontSize: 32, color: "#fff"}}/>,
    title: "Saúde",
    text: "Contabilidade para profissionais da saúde",      
    bgColor: Theme.colors.blue3
  }
];


const options = [
  {
    title: "Assessoria completa para abrir seu CNPJ",
    icon: <FaBuildingCircleCheck style={{ color: "#0d2daa", fontSize: "92", paddingLeft: "1rem"}} />,
    benefits: [
      "Inicie sua empresa com abertura e regularização já adequada às novas regras da Reforma Tributária.",
      "Unimos experiência contábil e tecnologia para garantir um processo eficiente e seguro.",
      "Cuidamos de toda a burocracia para que você se preocupe apenas em empreender."
    ],
    buttonText: "Quero Abrir minha empresa",
    href:"https://wa.me/5514997396924?text=Ol%C3%A1!%20Quero%20abrir%20minha%20empresa."
  },
  {
    title: "Suporte contábil que garante tranquilidade",
    icon: <MdTrendingUp style={{ color: "#759dcc", fontSize: "84" }} />,
    benefits: [
      "Tenha uma contabilidade confiável e sempre atualizada com as exigências legais.",
      "Nossos especialistas cuidam de toda a parte fiscal, contábil e trabalhista para você.",
      "Descomplique sua rotina financeira com a garantia de segurança e tranquilidade para o seu negócio."
    ],
    buttonText: "Quero migrar de contabilidade",
    href:"https://wa.me/5514997396924?text=Ol%C3%A1!%20Quero%20migrar%20de%20contabilidade."
  }
];

const smallIcons = [
  <FaBuildingCircleArrowRight style={{ color: "#fff", fontSize: 22 }} />,
  <MdTrendingUp style={{ color: "#fff", fontSize: 22 }} />
];


export default function Services() {

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

  const [currentIndex, setCurrentIndex] = useState(0);

  return(
    <>
      <Header page="services"/>  
      <Servicespage>
        <header className="flex-column">  
          <div className="outdoor flex">            
            <div className="service-outdoor flex">
              <h1>Soluções completas para sua empresa</h1>
              <p>Atendimento de qualidade para profissionais autônomos, microempreendedores individuais (MEI) e empresas de todos os setores econômicos.</p>            
              <div className="link flex">
                <button className="button"><a href="https://wa.me/5514997396924" target="blamk">Fale com nossos especialistas</a></button>
              </div>
            </div>                    
            <div className="img flex-column">
              <img src={financial} alt="Calculadora com análise de gráficos" />
            </div>
          </div>            
          <div className="next-section">
            <span><a href="/services#business-consulting"><FaArrowDown style={{color: "#0d2daa", fontSize: "16"}}/></a></span>
          </div>
        </header>
        <main id="business-consulting" className="flex-column">
          <div className="business-consulting-wrapper flex-column wrapper">            
            <h2 className="scroll-effect">{options[currentIndex].title}</h2>
            
            <div className="consulting-button flex items scroll-effect">
              {options.map((opt, i) => (
                <button
                  key={i}
                  className={i === currentIndex ? "active" : ""}
                  onClick={() => setCurrentIndex(i)}
                >
                  {opt.title.includes("Assessoria") ? "Abertura de empresa" : "Assessoria contábil"}
                </button>
              ))}
            </div>

            <div className="accounting-advisory flex-column items">              
              <div className="advisory-content flex items">
                <div className="icon flex scroll-effect">
                  <span className="flex"style={{ borderColor: options[currentIndex].icon.props.style.color }}>{options[currentIndex].icon}</span>
                </div>
                <div className="advisory-benefits-wrapper flex-column">
                  {options[currentIndex].benefits.map((benefit, i) => (
                    <div key={i} className="advisory-benefits flex">
                      <span className="scroll-effect" style={{ backgroundColor: options[currentIndex].icon.props.style.color }}>
                        {smallIcons[currentIndex]}
                      </span>
                      <p className="scroll-effect">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            
              <div className="option-cta flex scroll-effect">
                <a href={options[currentIndex].href} target="_blank" rel="noopener noreferrer">
                  <button>{options[currentIndex].buttonText}</button>
                </a>
              </div>
            </div>
          </div>
        </main>        
        <section className="service-banners">
          <div>
            <Banner/>
          </div>
        </section>
        <section className="why-choose-us flex-column">
          <div className="why-choose-us-wrapper flex-column wrapper items">
            <div className="why-choose-us-title flex-column scroll-effect">              
                <div><span>Sua empresa em boas mãos</span></div>
              <h2>Assessoria contábil de confiança</h2>
            </div>
            <div className="planning-benefits-advantages scroll-effect">
              <Highlights/>
            </div>            
          </div>
        </section>
        <div className="excelence-wrapper flex-column">          
          <div className="excelence flex">
            <div className="excelence-title flex">
              <div>
                <h2>35 anos de excelência</h2>            
                <p>Transformando desafios contábeis em soluções estratégicas</p>
              </div>              
            </div>
            <div className="excelence-icons flex">
              <span><FaUserTie style={{color: "#fff", fontSize: "48"}}/></span>
              <span><FaMedal style={{color: "#fff", fontSize: "48"}}/></span>
              <span><FaBriefcase style={{color: "#fff", fontSize: "48"}}/></span>
            </div>
          </div>
        </div>
        <section className="flex-column">
          <div className="each-client wrapper flex-column items"> 
            <div className="each-client-title flex-column items">
              <h2 className="scroll-effect">Soluções para cada cliente</h2>
              <p className="scroll-effect">Tenha uma contabilidade consultiva estruturada para atender seu segmento.</p>
            </div>            
            <div>              
              <div className="office-actions flex scroll-effect">                        
                {solutionActions.map(service => (
                  <Actions
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    text={service.text}
                    bgColor={service.bgColor}
                  />                
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="flex-column">
          <div className="cta flex-column wrapper items">
            <div className="cta-title flex-column"> 
              <h2 className="scroll-effect">Pronto para transformar sua empresa?</h2>
              <p className="scroll-effect">Aumente sua produtividade e leve seu negócio ao próximo nível.</p>              
            </div>            
            <div className="where-to-find-us flex items scroll-effect">
              <a href="tel:+551433822052">
                <div className="spot flex">
                  <span><MdOutlinePhone style={{fontSize: 32, color: "#00116f"}} /></span>
                  <div className="">
                    <h3>Telefone</h3>
                    <p>(14) 3382-2052</p>
                  </div>                    
                </div>    
              </a>              
              <a className="mail flex" href="mailto:contato@evilella.com">
                <div className="spot flex">
                  <span className="item">
                    <MdMailOutline style={{fontSize: 32, color: "#00116f"}} />
                  </span>
                  <div>                
                    <h3>E-mail</h3>
                    <p>contato@evilella.com</p>
                  </div>              
                </div>
              </a>
              <a className="phone" href="https://wa.me/5514997396924" target="blank">
                <div className="spot flex">
                  <span className="item">
                    <MdOutlineWhatsapp style={{fontSize: 32, color: "#00116f"}} />
                  </span>
                  <div className="">
                    <h3>Whatsapp</h3>
                    <p>(14) 99739-6924</p>
                  </div>
                </div>                  
              </a>   
            </div>
            <div className="button flex-column items scroll-effect">
              <button><a href="https://wa.me/5514997396924" target="blank">Solicitar Serviço</a></button>
            </div>
          </div>
        </section>
      </Servicespage>    
      <Footer/>
    </>
  )

}