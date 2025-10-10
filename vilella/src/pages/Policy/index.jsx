import Footer from "../../components/Footer";
import Header from "../../components/Header";

import styled from "styled-components";
import Theme from "../../styles/theme";

import { useEffect } from "react";


export default function Policy(){

  useEffect(() => {
  const script = document.createElement('script');
  script.src =
    'https://seal.godaddy.com/getSealBasic?sealID=HtWsR1bqBvFzui6dSDNPOvHjCX3mOawenxn3BSYkRUQhPoVXEUqxNyRAG0SR';
  script.async = true;

  const container = document.getElementById('siteseal');
  if (container) {
    container.innerHTML = '';
    container.appendChild(script);
  }
  }, []);

  const Content=styled.main`
  
    max-width: 1920px;
    margin: 5rem auto 0 auto;
    padding: 0 20%;

    display: flex;
    flex-direction: column;
    align-items: center;  
    text-align: justify;
    gap: 5rem;
    
    .per-topic,
    .item {
      display: flex;
      flex-direction: column;
    }

    h1,h2,h3,h4 {
      margin-bottom: .5rem;
    }
    h1 {
      font-size: ${Theme.textSize.titleMobileLg};
    }
    h2,h3 {

    }
    p {
      font-size: ${Theme.textSize.textMobileSm};
    }

    .welcome-note {
      margin-bottom: 2rem;
    }

    .per-topic {
      gap: 2rem;      
    }

    .item {
      gap: .5rem;      
    }

    #legal-terms {
      scroll-margin-top: 8.75rem; 
    }

    @media (max-width: 650px){

      padding: 0 10%;

      h1 {
        font-size: ${Theme.textSize.titleMobileSm};
      }
      h2,h3,h4 {
        font-size: ${Theme.textSize.textMobileLg};
      }
    }
  `

  return(
    <>
      <Header page=""/>    
      <Content>
      <div id="privacy-policy">
        <div className="welcome-note item">        
          <h1>Política de Privacidade</h1>          
          <p style={{padding: '4px 8px', backgroundColor: '#f9f9f9', borderLeft: '4px solid #909090'}}>Última atualização: 07 de outubro de 2025</p>
          <p>
          Agradecemos por acessar o nosso site, <strong>evilella.com</strong>, e por demonstrar interesse em nossos serviços.
          A sua privacidade é extremamente importante para nós, e estamos comprometidos em proteger seus dados pessoais com segurança e transparência.
          </p>
          <p>Caso tenha alguma dúvida, estamos à disposição para esclarecimento.
          </p>
        </div>
        
        <div className="per-topic">

          <div className="item">
            <h3>1. Introdução</h3>
            <p>
              Esta Política de Privacidade tem como objetivo explicar de forma transparente como coletamos, utilizamos e protegemos suas informações.
              Ao navegar em nosso site ou interagir com os nossos serviços, você concorda com as práticas descritas nesta política.
            </p>
            <p>
              Nosso compromisso com a proteção de dados é absoluto, e nossas práticas de segurança são continuamente aprimoradas para garantir que suas informações sejam tratadas de forma responsável e segura, conforme estabelecido pela <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm">Lei Geral de Proteção de Dados (LGPD)</a>.
            </p>

          </div>         
          <div className="item">
            <h3>2. Dados coletados</h3>
            <p>Coletamos informações de diferentes formas quando você utiliza o nosso site e os serviços oferecidos. Essas informações são tratadas de forma segura e transparente, com o objetivo de melhorar sua experiência de navegação e garantir a execução dos nossos serviços.</p>

            <h4>2.1. Dados técnicos</h4>
            <p>Ao acessar o site, determinadas informações técnicas podem ser coletadas automaticamente pelo navegador, tais como:</p>
            <ul>
              <li>Endereço IP (Internet Protocol);</li>
              <li>Tipo e versão do navegador;</li>
              <li>Idioma preferido;</li>
              <li>Sistema operacional;</li>
              <li>Tamanho de tela e resolução.</li>
            </ul>
            <p>Essas informações são processadas de forma temporária para assegurar o funcionamento correto do site, otimizar a entrega de conteúdo e garantir segurança contra acessos automatizados maliciosos (bots). Nenhuma dessas informações é armazenada de forma permanente ou vinculada a qualquer identificador pessoal.</p>

            <h4>2.2. Dados coletados pelo formulário de contato LGPD</h4>
            <p>Ao preencher e enviar o formulário disponível no site, o usuário fornece voluntariamente alguns dados pessoais, como:</p>
            <ul>
              <li>Nome;</li>
              <li>Endereço de e-mail;</li>
              <li>Conteúdo da mensagem.</li>
            </ul>
            <p>O tratamento dos dados coletados ocorre com base no consentimento do titular, obtido no momento do envio do formulário, quando o usuário seleciona a opção “Li e aceito a Política de Privacidade” e não serão utilizados para nenhum outro propósito sem o consentimento prévio do usuário. 
            </p>
            <p>As informações coletadas servirão exclusivamente para fins de contato e retorno da solicitação, como envio de respostas, esclarecimentos ou propostas relacionadas aos serviços do Escritório Vilella. </p>

            <h4>2.3. Forma de processamento</h4>
            <p>
              Os dados coletados através do formulário de contato são transmitidos de forma segura por meio da integração com o serviço <a href="https://www.emailjs.com/" target="_blank">EmailJS</a>.
              Os dados são utilizados exclusivamente pela equipe do Escritório Vilella para atender à solicitação feita e não são compartilhados com terceiros para fins de marketing.
            </p>
            <p>
              O EmailJS processa os dados pessoais em nosso nome, conforme nossas definições e em conformidade com a legislação aplicável de proteção de dados.
              O Escritório Vilella é o controlador dos dados pessoais, sendo responsável pela coleta e uso dos dados.
            </p>
            <p>
              A transmissão dos dados pessoais é realizada de maneira segura, utilizando tecnologias de criptografia para proteger a privacidade e segurança das informações durante o processo de envio.
            </p>
            <p>
              <strong>Importante:</strong> O EmailJS não tem acesso direto aos dados pessoais informados no formulário, exceto para processá-los conforme necessário para o envio das mensagens.
              Os dados não são utilizados para fins de marketing, nem compartilhados com terceiros, exceto conforme estabelecido nesta Política de Privacidade ou em caso de obrigação legal.
            </p>

          </div>

          <div className="item">
            <h3>3. Política de Cookies</h3>

            <h4>3.1. Definições de Cookies</h4>
            <p>Cookies são pequenos arquivos de texto implantados no dispositivo do usuário que armazenam informações relacionadas à navegação, como preferências, configurações e informações de sessão.</p>
            <p>Existem dois tipos principais de cookies:</p>
            <ul>
              <li><strong>Cookies de Sessão:</strong> São temporários e expiram assim que o navegador é fechado.</li>
              <li><strong>Cookies Persistentes:</strong> Permitem armazenar informações entre visitas para facilitar a navegação futura.</li>
            </ul>

            <h4>3.2. Uso de Cookies</h4>
            <p>
              O site <strong>evilella.com</strong> não utiliza cookies próprios para fins de rastreamento, marketing ou análise de comportamento de usuários.
              Contudo, páginas que incorporam conteúdo de terceiros podem permitir que esses serviços externos utilizem cookies para seu funcionamento técnico ou análise de visualizações.
              Esses cookies são controlados exclusivamente por esses terceiros, de acordo com suas respectivas políticas de privacidade.
            </p>
            <p>Ao continuar navegando neste site, o usuário consente com o uso de cookies de terceiros conforme descrito nesta política. O usuário pode gerenciar ou bloquear cookies nas configurações do navegador, podendo isso afetar algumas funcionalidades do site.</p>
          </div>
          
          <div className="item">
            <h3>4. Links para sites externos</h3>
            <p>
              Este site pode conter links para sites externos, como Instagram, Facebook, LinkedIn, Onvio, entre outros.
              Ao clicar nesses links, o usuário será direcionado para domínios externos que possuem suas próprias políticas de privacidade e práticas de coleta de dados, sobre as quais não temos controle.
            </p>
            <p>Recomendamos a leitura dessas políticas antes de interagir com esses sites.</p>
          </div>
          
          <div className="item">
            <h3>5. Armazenamento e segurança dos dados</h3>
            <p>
              Nosso site não mantém nenhum tipo de histórico de navegação ou pesquisas realizadas.
              Apenas informações técnicas (como endereço IP e dados de navegação) são temporariamente processadas para o bom funcionamento e segurança do site.
            </p>
            <p>
              Para garantir a segurança das informações processadas e proteção contra acessos não autorizados, modificações e divulgação indevida,
              o tráfego de dados ocorre em ambiente seguro (HTTPS), e os formulários contam com mecanismos de verificação e limitação de uso automatizado.
            </p>
          </div>

          <div className="item">
            <h3>6. Direitos do titular</h3>
            <p>O titular dos dados pessoais tem direito de solicitar, a qualquer momento:</p>
            <ul>
              <li>Acesso aos dados;</li>
              <li>Correção de dados incompletos ou incorretos;</li>
              <li>Eliminação dos dados pessoais tratados com consentimento;</li>
              <li>Portabilidade;</li>
              <li>Revogação do consentimento.</li>
            </ul>
            <p>
              Não discriminaremos os usuários que decidirem exercer seus direitos de privacidade,
              e a utilização do site não será de forma alguma prejudicada.
              Para exercer esses direitos, basta entrar em contato conosco por meio dos canais de comunicação disponíveis ao final desta política ou por carta registrada. Responderemos à sua solicitação dentro do prazo legal de 15 dias úteis, conforme estipulado pela LGPD.
            </p>
          </div>


          <div className="item">
            <h3>7. Alterações</h3>
            <p>
              Esta <strong>Política de Privacidade</strong> pode ser atualizada a qualquer momento, sem aviso prévio.
              Na ocorrência de alterações significativas, notificaremos os usuários por meio de um aviso em destaque no site.              
            </p>
            <p>
              Recomendamos a revisão periódica desta política para estar sempre informado sobre eventuais mudanças.
              As modificações serão sempre destacadas na data da última atualização.
            </p>
          </div>
          
          <div className="item">
            <h3>8. Dúvidas e suporte</h3>
            <p>
              Caso tenha dúvidas sobre esta Política de Privacidade ou deseje entrar em contato conosco para mais informações, por favor, consulte os dados de contato na parte final desta página.
            </p>
          </div>
        </div>
      </div>
      

      <div id="legal-terms" className="per-topic">
        <div className="item">
          <h2>Termos Legais</h2>
          <p style={{padding: '4px 8px', backgroundColor: '#f9f9f9', borderLeft: '4px solid #909090'}}>
            <strong>Última atualização:</strong> 09 de outubro de 2025</p>
            <p>Os Termos Legais a seguir descrevem as condições de uso, direitos autorais, responsabilidade sobre o conteúdo e demais aspectos relacionados à navegação neste site.
          </p>
          <p>
            Recomendamos a leitura atenta do conteúdo para melhor compreensão das diretrizes aplicáveis à sua experiência em nosso ambiente digital.
          </p>
        </div>

        <div className="item">
          <h3>1. Uso do site</h3>
          <p>
            O site <strong>evilella.com</strong> disponibiliza informações e conteúdos com fins institucionais e informativos.
            Ao acessar este site, você concorda em utilizar o conteúdo de forma ética, sem fins ilícitos ou que possam prejudicar terceiros.
          </p>
        </div>

        <div className="item">
          <h3>2. Direitos autorais e uso de imagens</h3>
          <p>
            Alguns materiais visuais presentes neste site, como imagens, podem ter sido obtidos de fontes públicas ou gratuitas,
            e nem todos possuem licença formal de uso exclusivo. Caso você seja titular de direitos sobre algum material aqui exibido
            e deseje solicitar sua remoção ou atribuição, entre em contato pelos canais de suporte disponíveis ao final desta página.
          </p>
        </div>

        <div className="item">
          <h3>3. Conteúdo de terceiros</h3>
          <p>
            Este site pode conter links para plataformas externas ou serviços de terceiros que coletam dados de usuários.
            Não somos responsáveis pelas políticas, práticas ou conteúdos desses sites ou serviços.
            Recomendamos que você leia atentamente as políticas de privacidade e os termos de uso de cada um ao acessá-los.
          </p>
        </div>

        <div className="item">
          <h3>4. Limitação de responsabilidade</h3>
          <p>
            O conteúdo deste site é fornecido conforme descrito acima, e o uso das informações apresentadas é de responsabilidade exclusiva do visitante. Tomamos todas as medidas razoáveis para proteger os dados pessoais fornecidos através dos formulários de contato. No entanto, apesar de nossos esforços para garantir a segurança, não podemos assegurar a proteção absoluta contra falhas técnicas ou acessos não autorizados.
          </p>
          <p> 
            Caso haja algum incidente, tomaremos as providências necessárias para mitigar o impacto e notificar os usuários afetados, conforme exigido pela legislação aplicável.
          </p>
          
        </div>


        <div className="item">
          <h3>5. Alterações nos Termos Legais</h3>
          <p>
            Estes termos podem ser atualizados a qualquer momento, sem aviso prévio.
            A versão mais recente estará sempre disponível no rodapé do site. Na ocorrência de alterações significativas, notificaremos os usuários por meio de um aviso em destaque no site.              
            </p>
            <p>
              Recomendamos a revisão periódica destes termos para estar sempre informado sobre eventuais mudanças.
              As modificações serão sempre destacadas na data da última atualização.
            </p>
        </div>

        <div className="item">
          <h3>6. Legislação aplicável</h3>
          <p>
            Este site segue as leis brasileiras, incluindo a Lei Geral de Proteção de Dados Pessoais (LGPD), e as questões relacionadas a esta Política de Privacidade serão regidas pelas leis do Brasil. Em caso de disputa, o foro competente será o da cidade de residência do titular do site, salvo disposição legal em contrário.
          </p>
        </div>
      </div>
            
      <div id="Support" className="item">
        <h2>Contatos para suporte</h2>
        <p>Para esclarecer dúvidas sobre esta <strong>Política de Privacidade</strong>, <strong>Termos Legais</strong> ou exercer qualquer um dos seus direitos relacionados aos dados pessoais, você pode nos encontrar nos seguintes canais:</p>
        <ul>
          <li><strong>Telefone:</strong> (14) 3382-2052 / (14) 99779-5003</li>
          <li><strong>Endereço:</strong> R. Mario Monteiro de França, 256 - Centro, Fartura/SP - CEP: 18870-030</li>
          <li><strong>E-mail:</strong> <a href="mailto:suportevilella@gmail.com">suportevilella@gmail.com</a></li>
        </ul>
      </div>
      <div className="item">
        <span id="siteseal"/>
      </div>
      </Content>
      <Footer/>   
    </>
  )
}