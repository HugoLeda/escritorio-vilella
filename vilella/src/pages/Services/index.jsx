import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Banner from "../../components/ServiceBanner";
import Actions from "../../components/LgpdActions"
import Highlights from "../../components/ServiceHighlights";

import strategy from "../../assets/services/financial.png";

import { Servicespage } from "./style";
import { MdFactory, MdHealthAndSafety, MdMailOutline, MdOutlinePhone, MdOutlineShoppingCart, MdOutlineWhatsapp, MdRequestQuote } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { FaArrowDown, FaBriefcase, FaBuildingCircleArrowRight, FaBuildingCircleCheck, FaMedal } from "react-icons/fa6";

import Theme from "../../styles/theme";
import { useState } from "react";

export default function Services() {

    const [currentIndex, setCurrentIndex] = useState(0);

  const options = [
    {
      title: "Assessoria completa para você abrir seu CNPJ",
      icon: <FaBuildingCircleCheck style={{ color: "#0d2daa", fontSize: "84" }} />,
      benefits: [
        "Inicie sua empresa com abertura e regularização já adequada às novas regras da Reforma Tributária.",
        "Unimos experiência contábil e tecnologia para garantir um processo rápido, prático e seguro.",
        "Cuidamos de toda a burocracia para que você se preocupe apenas em começar a empreender."
      ],
      buttonText: "Quero Abrir minha empresa"
    },
    {
      title: "Suporte contábil que garante tranquilidade",
      icon: <FaBuildingCircleCheck style={{ color: "#759dcc", fontSize: "84" }} />,
      benefits: [
        "Tenha uma contabilidade confiável e sempre atualizada com as exigências legais.",
        "Nossos especialistas cuidam de toda a parte fiscal, contábil e trabalhista para você.",
        "Descomplique sua rotina financeira com a garantia de segurança e tranquilidade para o seu negócio."
      ],
      buttonText: "Quero migrar de contabilidade"
    }
  ];

  
  const solutionActions = [
    {
      icon: <MdOutlineShoppingCart style={{fontSize: 32, color: "#fff"}}/>,
      title: "Comércio",
      text: "Serviços adaptados para o seu setor comercial",
      bgColor: Theme.colors.blue2
    },
    {
      icon: <MdRequestQuote style={{fontSize: 32, color: "#fff"}}/>,
      title: "Serviço",
      text: "Soluções fiscais para profissionais autônomos",
      bgColor: Theme.colors.babyBlue
  
    },
    {
      icon: <MdHealthAndSafety style={{fontSize: 32, color: "#fff"}}/>,
      title: "Saúde",
      text: "Gestão fiscal para clínicas e CNPJ médico",
      bgColor: Theme.colors.red1
    },
    {
      icon: <MdFactory style={{fontSize: 32, color: "#fff"}}/>,
      title: "Indústria",
      text: "Planejamento e redução de custo de produção",
      bgColor: Theme.colors.blue3
    }
  ]

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
                <button className="button"><a href="">Fale com nossos especialistas</a></button>
              </div>
            </div>                    
            <div className="img flex-column">
              <img src={strategy} alt="Computador com análise de gráficos" />
            </div>
          </div>            
          <div className="next-section">
            <span><a href="/services#business-consulting"><FaArrowDown style={{color: "#0d2daa", fontSize: "16"}}/></a></span>
          </div>
        </header>
        <main id="business-consulting" className="flex-column">
          <div className="business-consulting-wrapper flex-column wrapper">            
            <h2>{options[currentIndex].title}</h2>
            
            <div className="consulting-button flex items">
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
                <div className="icon flex">
                  <span className="flex"style={{ borderColor: options[currentIndex].icon.props.style.color }}>{options[currentIndex].icon}</span>
                </div>
                <div className="advisory-benefits-wrapper flex-column">
                  {options[currentIndex].benefits.map((benefit, i) => (
                    <div key={i} className="advisory-benefits flex">
                      <span style={{ backgroundColor: options[currentIndex].icon.props.style.color }}>
                        <FaBuildingCircleArrowRight style={{ color: "#fff", fontSize: "24" }} />
                      </span>
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            
              <div className="option-cta flex">
                <button><a href="">{options[currentIndex].buttonText}</a></button>
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
            <div className="why-choose-us-title flex-column">              
                <div><span>Sua empresa em boas mãos</span></div>
              <h2>Assessoria contábil de confiança</h2>
            </div>
            <div className="planning-benefits-advantages">
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
              <h2>Soluções para cada cliente</h2>
              <p>Tenha uma contabilidade consultiva estruturada para atender seu segmento.</p>
            </div>            
            <div>              
              <div className="office-actions flex">                        
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
              <h2>Pronto para transformar sua empresa?</h2>
              <p>Aumente sua produtividade e leve seu negócio ao próximo nível.</p>              
            </div>            
            <div className="where-to-find-us flex items">
              <div className="spot phone flex">
                <span><MdOutlinePhone style={{fontSize: 32, color: "#00116f"}} /></span>
                <div className="">
                  <h3>Telefone</h3>
                  <p>(14) 3382-2052</p>
                </div>                    
              </div>    
              <div className="spot flex">
                <a className="mail flex" href="mailto:contato@evilella.com">
                  <span className="item">
                    <MdMailOutline style={{fontSize: 32, color: "#00116f"}} />
                  </span>
                  <div>                
                    <h3>E-mail</h3>
                    <p>contato@evilella.com</p>
                  </div>
                </a>                  
              </div>
              <div className="spot phone flex">
                <a className="flex phone" href="">
                  <span><MdOutlineWhatsapp style={{fontSize: 32, color: "#00116f"}} /></span>
                  <div className="">
                    <h3>Whatsapp</h3>
                    <p>(14) 99779-5080</p>
                  </div>
                </a>                
              </div>
            </div>
            <div className="button flex-column items">
              <button><a href="">Solicitar Serviço</a></button>
            </div>
          </div>
        </section>
      </Servicespage>    
      <Footer/>
    </>
  )

}