import styled from "styled-components"
import Theme from "../../styles/theme"

export default function ServiceSpecialty({icon, title, text, bgColor}) {
  
  const Specialty = styled.div `
    
    .flex {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-bottom: 3rem;
      height: 400px;
    }

    h3 {      
      padding: 1rem 2rem;
      font-size: ${Theme.textSize.textLg};
    }
    
    p {
      padding: 1rem 2rem;
    }

    .specialty-box {
      gap: 3rem;
      box-shadow: 0 2px 6px rgb(0,0,0,0.2);
      background-color: ${Theme.colors.white};
      max-width: 350px;
      border-radius: 8px;
    }

    .specialty-box:hover {
      .icon {
        transform: scale(1.25);
      }
    }

    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: linear all .2s;
    }



    @media (max-width: 1200px) {

      .specialty-box:hover {
        .icon {
          transform: none;
        }
      }

    }

  `
  
  return (
    <Specialty>
      <div className="specialty-box flex">
        <div className="icon" style={{ backgroundColor: bgColor}}>
          <span>{icon}</span>
        </div>
        <div className="">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </Specialty>
  )
}