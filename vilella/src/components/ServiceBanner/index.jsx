import { FaCheckCircle } from "react-icons/fa";
import { Banner } from "./style"
import { useState } from "react";
import { FaHeadset } from "react-icons/fa6";

export default function ServiceBanner() {

  const banners = [
    {
      title: "Cuidamos da sua conformidade fiscal!",
      description: "Aproveite de uma apuração precisa de impostos e estratégias para redução de encargos.",
      topics: [
        { icon: <FaCheckCircle style={{color: "##13339C", fontSize: "24"}}/>, text: "Planejamento tributário" },
        { icon: <FaCheckCircle style={{color: "#fff", fontSize: "24"}}/>, text: "Parcelamento de débitos" },
        { icon: <FaCheckCircle style={{color: "#fff", fontSize: "24"}}/>, text: "Escrituração fiscal" },
      ],
      background: "linear-gradient(135deg, #1a3a8a 0%, #0d2daa 100%)",
      buttonColor: "#1a3a8a",
      href: "https://wa.me/5514997396924?text=Ol%C3%A1!%20Quero%20falar%20com%20especialista%20fiscal."
    },
    {
      title: "Precisa de uma Contabilidade Consultiva?",
      description: "Tenha uma visão clara do desempenho da sua empresa e o suporte para crescer com segurança.",
      topics: [
        { icon: <FaCheckCircle style={{color: "#759dcc", fontSize: "24"}}/>, text: "Consultoria personalizada" },
        { icon: <FaCheckCircle style={{color: "#fff", fontSize: "24"}}/>, text: "Planejamento societário" },
        { icon: <FaCheckCircle style={{color: "#fff", fontSize: "24"}}/>, text: "Suporte para decisões" },
      ],
      background: "linear-gradient(135deg, #759dcc 50%, #93c5ff 150%)",
      buttonColor: "#759dcc",
      href: "https://wa.me/5514997396924?text=Ol%C3%A1!%20Quero%20falar%20com%20especialista%20contábil."
    },
    {
      title: "Soluções de Departamento Pessoal",
      description: "Suporte completo com transmissão de obrigações e todas as questões trabalhistas de colaboradores.",
      topics: [
        { icon: <FaCheckCircle style={{color: "#0d2daa", fontSize: "24"}}/>, text: "Folha de pagamento" },
        { icon: <FaCheckCircle style={{color: "#fff", fontSize: "24"}}/>, text: "Contratos de trabalho" },
        { icon: <FaCheckCircle style={{color: "#fff", fontSize: "24"}}/>, text: "Consultoria trabalhista" },
      ],
      background: "linear-gradient(90deg, #00116f 0%, #0d2daa 100%)",
      buttonColor: "#00116f",
      href: "https://wa.me/5514997396924?text=Ol%C3%A1!%20Quero%20falar%20com%20especialista%20de%20departamento%20pessoal."
    },
    {
      title: "Emitimos seu certificado digital com agilidade!",
      description: "Garanta a emissão ou renovação do seu certificado digital com segurança e suporte especializado.",
      topics: [
        { icon: <FaCheckCircle style={{color: "#505050", fontSize: "24"}}/>, text: "Presencial e a distância" },
        { icon: <FaCheckCircle style={{color: "#fff", fontSize: "24"}}/>, text: "Emissão para CPF e CNPJ" },
        { icon: <FaCheckCircle style={{color: "#fff", fontSize: "24"}}/>, text: "Certificados A1 e A3" },
      ],
      background: "linear-gradient(135deg, #2b2b2b 0%, #606060 100%)",
      buttonColor: "#2b2b2b",
      href: "https://wa.me/5514997396924?text=Ol%C3%A1!%20Quero%20emitir%20meu%20certificado%20digital."
    },
    {
      title: "Contabilidade para Produtor Rural",
      description: "Escrituração fiscal, gestão de impostos e folha de pagamento com precisão para sua atividade rural.",
      topics: [
        { icon: <FaCheckCircle style={{color: "#759dcc", fontSize: "24"}}/>, text: "DITR" },
        { icon: <FaCheckCircle style={{color: "#fff", fontSize: "24"}}/>, text: "Escrituração fiscal" },
        { icon: <FaCheckCircle style={{color: "#fff", fontSize: "24"}}/>, text: "Obrigações trabalhistas" },
      ],
      background: "linear-gradient(135deg, #759dcc 50%, #1a3a8a 150%)",
      buttonColor: "#759dcc",
      href: "https://wa.me/5514997396924?text=Ol%C3%A1!%20Quero%20falar%20com%20especialista%20em%20Rural."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % banners.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  const goTo = (index) => setCurrentIndex(index);


  return (
    <Banner>    
      <div className="services-banner">
        <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div
              key={index}
              className="banner-item"
              style={{
                background: banner.background,
              }}
            >
              <div className="flex-column">
                <div className="content flex">
                  <div className="title-text flex-column">
                    <h2 className="title">{banner.title}</h2>
                    <p className="description">{banner.description}</p>
                    <div className="button flex-column">
                      <a href={banner.href} target="blank">
                        <button style={{ fontWeight: 500, color: banner.buttonColor }}>
                          
                          <span className="headset flex-column">
                            <FaHeadset/>
                          </span>
                          Falar com especialista
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="topics flex-column">
                    {banner.topics.map((item, i) => (
                      <div
                        key={i}
                        className="topic"
                        style={
                          i === 0
                            ? { backgroundColor: "#fff", border: "none", color: banner.buttonColor }
                            : {}
                        }
                      >
                        <span className="icon">{item.icon}</span>
                        <p style={{ color: i === 0 ? banner.buttonColor : "#fff" }}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-button prev" onClick={prev} disabled={currentIndex === 0}>‹</button>
        <button className="nav-button next" onClick={next} disabled={currentIndex === banners.length - 1}>›</button>

        <div className="dots">
          {banners.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>

    </Banner>
  )
}