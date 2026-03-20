import styled from "styled-components"
import Theme from "../../styles/theme"

const Specialty = styled.div `
  
  .flex {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 3rem;
    max-height: 400px;
  }

  h3 {      
    padding: 1rem 2rem;
    font-size: ${Theme.textSize.textLg};
    margin: 0;
  }
  
  p {
    padding: 1rem 2rem;
    margin: 0;
  }

  
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
  }


  .specialty-box {
    height: 400px;
    padding: 0;
    box-shadow: 0 2px 6px rgb(0,0,0,0.2);
    background-color: ${Theme.colors.white};
    max-width: 350px;    
    border-radius: 8px;
    justify-content: flex-start;
    gap: 3rem;

    .box-content {
      justify-content: flex-end;
      flex-direction: column;
      padding: 0;
      span {
        display: none;
      }
    }

  }


  .specialty-box:hover {
    .icon span {
      transform: scale(1.25);
      align-items: center;   
    }
    .box-content span {
      display: flex;
      flex-direction: column;
      align-items: flex-end;      
      transition: linear all .2s;
      padding: 0 1.5rem;   
    }
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4.5rem;

    span {
      transition: linear all .2s;
      padding: 0;
    }
  }



  @media (max-width: 1200px) {

    .specialty-box {
      h3 {
        padding: 0;
      }
      gap: 0;
      .icon {
        padding: 0;
      }

      .box-content span {
        padding: 1.5rem 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .specialty-box:hover {
      .icon span {
        transform: none;        
      }
      .box-content span {        
        padding: 1.5rem 0 0 0;
        align-items: center;
      }
    }

  }

`

export default function ServiceSpecialty({icon, title, text, bgColor, arrow, link}) { 
  return (
    <Specialty>
      
      <a href={link}>
        <div className="specialty-box flex">
            <div className="icon" style={{ backgroundColor: bgColor}}>
              <span>{icon}</span>
            </div>
            <div className="box-content flex">
              <h3>{title}</h3>
              <p>{text}</p>
              <span>{arrow}</span>
            </div>
        </div>
      </a>
    </Specialty>
  )
}