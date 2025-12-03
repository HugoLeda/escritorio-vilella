import styled from "styled-components"
import Theme from "../../styles/theme"

export default function AboutAdvantages({icon,title,place,text}) {

  const Advantages = styled.div `

    .advantage-card {
      flex-direction: column;
      max-width: 320px;
      padding: 2.5rem;
      border: 1px solid ${Theme.colors.white};
      border-radius: 40px;      
      
    h3 {
      font-size: ${Theme.textSize.textMobileMd};
    }
      p {
        font-size: ${Theme.textSize.textMobileSm};
        color: ${Theme.colors.white};
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
        <div className="advantage-card flex">
          <div className="icon">{icon}</div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </Advantages>
    </>
  )
}