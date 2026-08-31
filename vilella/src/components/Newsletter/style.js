import styled from "styled-components";

export const NewsletterStyle = styled.div `

  .preview {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    border: 10px solid #fff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    user-select: none;
  }

  .preview-zindex {
    position: absolute;
    inset: 0;
    z-index: 10;
    background-color: transparent;
    cursor: default;
  }

  iframe {
    width: 100%;
    height: 360px;
    display: block;
    margin: -10px 5px 0 0;
    transform: scale(1.25);
    border: none;
    overflow: hidden;
    pointer-events: none;
  }

  a {
    display: inline-flex;
    justify-content: center;
    gap: .25rem;
    color: #2b2b2b;
    text-decoration: none;
  }

  @media (max-width: 900px) {    

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;    

    .preview {      
      max-width: 325px;
    }

    iframe {
      margin: -5px -20px;
    }
  }

  
  @media (max-width: 700px) {    

    iframe {
      margin: -15px -10px;
      transform: scale(1.18);
      pointer-events: none;
      touch-action: none;
    }
  }


  @media (max-width: 600px) {    


    .preview {
      touch-action: none;
    }

    iframe {
      margin: -35px -15px;
      transform: scale(1.15);
      pointer-events: none;
      touch-action: none;
    }
  }

  @media (max-width: 385px) {

    .preview {
      max-width: 400px;
    }

    .preview-zindex {
      max-width: 400px;
    }

    iframe {
      width: 300px;
      margin: -35px -25px;
      transform: scale(1.05);
      pointer-events: none;
      touch-action: none;
    }

  }


`