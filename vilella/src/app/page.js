import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header/>
      <section>
        <h1>Contabilidade de confiança</h1>
        <p>Bem-vindo ao Escritório Vilella, onde oferecemos mais de 35 anos de experiência como seu parceiro confiável no mundo financeiro. Permita-nos assumir a responsabilidade pelos números, permitindo que você se concentre totalmente em alcançar seus objetivos de negócios. Contate-nos hoje mesmo e descubra como nossa expertise em contabilidade pode ser a chave para o seu sucesso financeiro. Estamos comprometidos em ajudá-lo a prosperar financeiramente e a atingir todo o potencial de sua empresa.</p>
        <button>Saiba Mais</button>
      </section>
      <section>
        <div>
          <span>E</span>
          <p>Visão Empresarial</p>
          <p>Buscamos o reconhecimento por fornecer soluções contábeis que fortalecem sua base financeira e estabelecer parcerias duradouras baseadas na excelência e confiança mútua. Acreditamos que o sucesso duradouro não se constrói apenas com serviços de qualidade, mas também com relacionamentos sólidos e duradouros.</p>
        </div>
        <div>
          <span>V</span>
          <p>Nossos Valores</p>
          <p>Ética profissional, Comprometimento e qualidade, Trabalho em equipe, Relacionamento de parceria com o cliente, Dinamismo, Transparência, Integridade e Responsabilidade. O nosso compromisso com a excelência e a qualidade é inabalável. Cada projeto que assumimos é tratado com a máxima dedicação. </p>
        </div>
      </section>
      <section>
        <div>
          <h2>Mais de <span>35 anos</span> de experiência</h2>
          <p>Com um histórico de sucesso de mais de 3 décadas, o Escritório Vilella é referência em contabilidade. Nossa experiência inigualável nos permite oferecer soluções de excelência para empresas de todos os portes e setores.</p>
          <div>
            <div>
              <img/>
              <p>Atendimento <span>Personalizado</span></p>
              <span>Nossa abordagem é simples: otimizar cada aspecto do seu projeto ou negócio para alcançar a máxima eficiência.</span>
            </div>
            <div>
              <img/>
              <p>Atendimento <span>Personalizado</span></p>
              <span>Nossa abordagem é simples: otimizar cada aspecto do seu projeto ou negócio para alcançar a máxima eficiência.</span>
            </div>
            <div>
              <img/>
              <p>Atendimento <span>Personalizado</span></p>
              <span>Nossa abordagem é simples: otimizar cada aspecto do seu projeto ou negócio para alcançar a máxima eficiência.</span>
            </div>
          </div>
        </div>
        <div>
          <img/>
        </div>
      </section>
      <Footer/>
    </main>
  )
}
