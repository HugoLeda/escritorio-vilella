import styled from "styled-components"
import Theme from "../../styles/theme"

export default function AboutAdvantages({icon,title,place}) {

  const Advantages = styled.div `

    .advantage-card {
      gap: 1rem;
      user-select: none;
      width: 150px;

      
      p {
        font-size: ${Theme.textSize.textSm};
        color: ${Theme.colors.white};
        width: 75%;
        margin: 0;
      }
    }

    @media (max-width: 960px) {
      
      .advantage-card {
        p {
          font-size: ${Theme.textSize.textMobileSm};
        }
      }

    }

  `
  
  return(
    <>
    <Advantages>
      <div className={`place${place}`}>
        <div className="advantage-card flex-column">
          <div className="icon">{icon}</div>
          <p>{title}</p>
        </div>
      </div>
    </Advantages>
    </>
  )
}