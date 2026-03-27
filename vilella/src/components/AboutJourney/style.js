import styled from "styled-components";
import Theme from "../../styles/theme";

export const Journey=styled.div`
  
  display: flex;
  position: relative;

  .timeline-item {
    position: relative;
    padding: 2rem;
    transition: .3s ease-out;
    color: ${Theme.colors.white};

    user-select: none;
    &:hover {
      transform: scale(1.05);
    }
  }
  
  p {
    margin: 0;
  }
  
  .timeline-item.left {
    right: 55%;
  }

  .timeline-item.right {
    left: 55%;
  }

  .timeline-content {
    padding: 2rem;
    background-color: ${Theme.colors.blue3};
    border-radius: 40px;
    box-shadow: 10px 20px 20px rgba(117, 156, 204, 0.3);

    width: 300px;
    color: ${Theme.colors.white};
  }

  
  .timeline-circle {
    position: absolute;
    top: 50%;
    left: 50%; 
    width: 64px;
    height: 64px;
    box-shadow: 1px 2px 8px rgba(0, 100, 255, 0.5);
    background-color: #fff;
    border: 3px solid;
    border-color: ${props => props.borderColor || "#759dcc"};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
  }


  
  /*
  .timeline-circle {
    position: absolute;
    top: 50%;
    left: 50%; 
    width: 16px;
    height: 16px;
    background-color: ${Theme.colors.blue1};
    box-shadow: 1px 2px 8px rgba(0, 119, 255, 0.7);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  */
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-1rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

  .scroll-effect {
    opacity: 0;
    transform: translateY(1rem);
    transition: all .5s ease-in-out;
  }

  .scroll-effect.visible.fade-up {
    animation: fadeInUp 1s ease-out forwards;
  }

  .scroll-effect.visible.fade-down {
  animation: fadeInDown 0.8s ease-out forwards;
}


  @media (max-width: 960px) {

    .timeline-item:hover {
      transform: none;
    }

    .timeline-item.left,
    .timeline-item.right {
      left: 10%;
    }
  
    .timeline-circle {
      top: 50%;
      left: 5%;       
    }
  }

  @media (max-width: 624px) {
    
    gap: 2rem;

    .timeline-content {
      padding: 1.75rem;
      max-width: 250px;
    }
    .timeline-item {
      padding: 2rem 0;      
    }
  }

  @media (max-width: 400px) {
    gap: 2rem;
    .timeline-content {
      padding: 1.74rem;
      max-width: 200px;
    }
    .timeline-item {
      padding: 2rem 0;      
    }
  }

`