import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Servicespage } from "./style";

import ServiceCard from "../../components/ServiceCard";

import card from '../../assets/services/card.webp'
import simples from '../../assets/services/simples.webp';
import tractor from '../../assets/services/tractor.webp';
import nfe from '../../assets/services/nfe.webp';
import people from '../../assets/services/people.webp';
import person from '../../assets/services/person.webp';
import calc from '../../assets/services/calc.webp';
import scale from '../../assets/services/scale.webp';
import greet from '../../assets/services/greet.webp';
import calendar from '../../assets/services/calendar.webp';

import certificado from '../../assets/services/certificado.webp';
import mei from '../../assets/services/mei.webp';
import rural from '../../assets/services/rural.webp';
import cpf from '../../assets/services/cpf.webp';
import fiscal from '../../assets/services/fiscal.webp';
import ctps from '../../assets/services/ctps.webp';
import contabil from '../../assets/services/contabil.webp';
import legal from '../../assets/services/legal.webp';
import assessoria from '../../assets/services/assessoria.webp';
import dividas from '../../assets/services/dividas.webp';

const servicesContent = [
  {
    direction: "normal", 
    title:"Assessoria Empresarial", 
    textContent:"Orientação e suporte especializados para expandir o alcance no mercado, entender concorrentes, setor e base de clientes, em busca da maximização de oportunidades e crescimento do seu negócio.", 
    img:assessoria, 
    alt: "Caneta sob gráfico impresso",
    icon:greet, 
    linkWhats:"https://wa.me/5514997795351?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20Assessoria%20Empresarial."
  },
  {
    direction: "reverse", 
    title:"Contábil", 
    textContent:"Gestão completa da contabilidade do seu negócio, desde a escrituração e apuração de impostos até a geração de relatórios financeiros, garantindo precisão e conformidade com a legislação.", 
    img:contabil, 
    alt: "Calculadora, lupa e moedas sob documento",
    icon:calc, 
    linkWhats:"https://wa.me/5514997795063?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20Contabilidade"
  },
  {
    direction: "normal", 
    title:"Fiscal e Tributário", 
    textContent:"Oferecemos orientação especializada para garantir a conformidade fiscal, apurar impostos com precisão e minimizar encargos financeiros por meio de estratégias de segregação tributária.", 
    img:fiscal, 
    alt: "Lupa e calculadora sob gráfico",
    icon:nfe, 
    linkWhats:"https://wa.me/5514997795063?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20Fiscal%20e%20Tribut%C3%A1rio."
  },
  {
    direction: "reverse", 
    title:"Departamento Pessoal", 
    textContent:"Nosso serviço de departamento pessoal oferece suporte para empresas com a transmissão de obrigações e todas as questões trabalhistas relacionadas aos seus colaboradores.", 
    img:ctps, 
    alt: "Aparelho celular com aplicativo CTPS ao lado de uma Carteira de Trabalho física",
    icon:people, 
    linkWhats:"https://wa.me/5514997795085?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20Departamento%20Pessoal"
  },  
  {
    direction: "normal", 
    title:"Departamento Legal", 
    textContent:"Assistência direcionada para assegurar que seu negócio opere dentro da estrutura legal, desde a abertura, regularização até a alteração do contrato social e encerramento de empresas.", 
    img:legal, 
    alt: "Duas pessoas em reunião com documentos, balança e malhete sob mesa",
    icon:scale, 
    linkWhats:"https://wa.me/5514997795053?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20Legaliza%C3%A7%C3%A3o!"
  },
  {
    direction: "reverse", 
    title:"Pessoa Física", 
    textContent:"Fornecemos orientação especializada em declaração de IRPF, planejamento sucessório patrimonial e outras soluções financeiras e fiscais para auxiliar na organização de suas finanças pessoais.", 
    img:cpf, 
    alt: "Pessoa segurando um cartão CPF em destaque",
    icon:person, 
    linkWhats:"https://wa.me/5514997795080?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20para%20Pessoa%20F%C3%ADsica."
  },
  {
    direction: "normal", 
    title:"Produtor Rural", 
    textContent:"Oferecemos serviços de escrituração fiscal, gestão de impostos, folha de pagamento e elaboração de relatórios financeiros, assegurando o suporte necessário para suas atividades rurais.", 
    img:rural, 
    alt: "Irrigação de plantas",
    icon:tractor, 
    linkWhats:"https://wa.me/5514997795025?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20para%20Produtor%20Rural."
  },
  {
    direction: "reverse", 
    title:"MEI", 
    textContent:"Oferecemos um serviço completo para regularizar seu negócio como Microempreendedor Individual (MEI), assegurando o cumprimento de todas as obrigações fiscais.", 
    img:mei, 
    alt: "Papéis com logo do MEI e da Receita Federal",
    icon:simples, 
    linkWhats:"https://wa.me/5514997795080?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20MEI."
  },
  {
    direction: "normal", 
    title:"Certificadora", 
    textContent:"Emitimos certificados digitais para Pessoa Física e Jurídica, garantindo a autenticidade da identidade digital por meio de um processo prático e eficiente.", 
    img:certificado, 
    alt: "Certificado digital A3",
    icon:card, 
    linkWhats:"https://wa.me/5514997794243?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20Certificadora%20Digital."
  },
  {
    direction: "reverse", 
    title:"Parcelamento de Débitos", 
    textContent:"Auxiliamos na gestão de dívidas com negociação, parcelamento, consolidação, levantamento de dívida ativa, simulação de parcelamento e acompanhamento de pagamentos.", 
    img:dividas, 
    alt: "Mão segurando caneta ao lado de calculadoras e gráficos sob mesa",
    icon:calendar, 
    linkWhats:"https://wa.me/5514997795061?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20Parcelamento%20de%20D%C3%ADvidas"
  }
]

export default function Services() {
  return(
    <>
      <Header page="services"/>  
      <Servicespage className="flex">

        <div className="services">
          <h1>Nossos <span>Serviços</span></h1>
          <p>No Escritório Vilella, oferecemos serviços de excelência nas áreas contábil, tributária, trabalhista e empresarial. Nossa equipe de profissionais altamente qualificados está sempre pronta para atender e apresentar soluções personalizadas e eficientes, se adaptando às necessidades específicas de cada cliente.</p>
          <p>Valorizamos a parceria e a confiança que estabelecemos com nossos clientes, atendendo com qualidade desde profissionais autônomos e produtores rurais até microempreendedores individuais (MEI) e grandes empresas de todos os setores econômicos, oferecendo um serviço marcado pelo profissionalismo e pela ética.</p>
        </div>

        <main className="services">
          {servicesContent.map(service => (
            <ServiceCard 
              key={service.title}              
              direction={service.direction}
              title={service.title}
              textContent={service.textContent}
              img={service.img}
              alt={service.alt}
              icon={service.icon}
              linkWhats={service.linkWhats}
            />
          ))}      
        </main>

      </Servicespage>    
      <Footer/>
    </>
  )

}