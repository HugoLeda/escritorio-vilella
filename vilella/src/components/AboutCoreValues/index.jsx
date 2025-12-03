import styled from "styled-components";
import Theme from "../../styles/theme";

const AboutCards = styled.div`
  .bsc-card {
    position: relative; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    width: 320px;
    height: 317px;
    border-radius: 40px;
    padding: 1.5rem 2rem;
    gap: 2rem;
    box-shadow: 0 2px 10px rgba(104, 102, 233, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;    
    
    overflow: hidden;
    transition: 0.2s linear all;
    background-color: ${props => props.hoverColor || "red"};    
    border: none;
    user-select: none;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 16px rgba(0, 38, 255, 0.2);
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
    font-size: ${Theme.textSize.textMobileMd};
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
