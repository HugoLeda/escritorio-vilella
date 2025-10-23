import styled from "styled-components";
import Theme from "../../styles/theme";

const AboutCards = styled.div`
  .bsc-card {
    position: relative; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    width: 317px;
    height: 317px;
    border-radius: 40px;
    padding: 1.5rem 1.5rem;
    overflow: hidden;
    transition: 0.2s linear all;
    background-color: ${props => props.hoverColor || "red"};    
    border: none;
    user-select: none;
  }
  
  .bsc-card:hover {
    background-color: transparent;
    border: 1px solid ${Theme.colors.white};
    h3 {
      color: ${Theme.colors.gray1};
    }
  }

  .bg-circle {
    position: absolute;
    top: 25%; 
    left: 0;
    width: 100%;
    height: 80%;
    background-color: ${Theme.colors.white};
    border-radius: 50% 50% 0 0 ;
  }

  .bsc-card-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
  }
  
  .bsc-card-icon {
    color: white;
    font-size: 32px;
    transition: color 0.2s ease;
  }

  .bsc-card-text {
    position: relative;
    color: ${Theme.colors.gray1};
  }

  h3 {
    color: ${props => props.hoverColor || "red"};
    font-size: ${Theme.textSize.titleMobileSm};
    font-weight: 600;
  }

  p {
    font-size: ${Theme.textSize.textMobileLg};
    padding: 1rem;
    margin: 0;
  }

    
  @media (max-width: 1224px) {


    .bsc-card {
      gap: 2rem;
      width: 300px;
      height: 300px;
      border-radius: 40px;
      padding: 1rem .5rem;
      }
    

    .bg-circle {
      position: absolute;
      top: 32%; 
      left: 0;
      width: 100%;
      height: 80%;
      background-color: ${Theme.colors.white};
      border-radius: 50% 50% 0 0 ;
    }

    .bsc-card-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: relative;
    }

  }


`;

export default function AboutValues({ icon, title, text, borderColor, hoverColor }) {
  return (
    <AboutCards hoverColor={hoverColor}>
      <div className="bsc-card flex-column" style={{border: borderColor}}>
        <div className="bg-circle"></div>
        <div className="bsc-card-icon">{icon}</div>
        <div className="bsc-card-text">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </AboutCards>
  );
}
