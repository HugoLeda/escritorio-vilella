import styled from "styled-components";
import media from "styled-media-query";
import Theme from "../../styles/theme";

export const CardSection = styled.section `
  .flex {
    display: flex;    
  }   

  .content {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    user-select: none;
  
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .title {
        height: 50px;

        align-items: center;        
        gap: .5rem;

        h2 {
          font-size: ${Theme.textSize.titleCardLg};
          color: ${Theme.colors.blue1};
          font-weight: 600;

          margin: 0;
        }

        .img {          
          height: ${Theme.textSize.titleCardLg};
          
          justify-content: center;
          align-items: center;

          img {
            height: 75%;
            width: auto;
          }
        }
      }

      .know-more {
        justify-content: space-evenly;
        align-items: center;

        .whatsapp {
          font-size: 40px;
          color: #25D366;
        }
      }
    }        
  }  

  .flex-normal,
  .flex-reverse {
    .image {
      width: auto;
      height: 370px;
    }
    
  }

  .flex-normal {
    background-color: rgb(0,0,0,0.03);
    .info {
      padding: 2rem 0 2rem 2rem;
    }
    .image {
      clip-path: polygon(100% 100%, 0% 100%, 50% 0%, 100% 0%);
    }
  }

  .flex-reverse {    
    flex-direction: row-reverse;
    background-color: ${Theme.colors.white};

    .info {
      padding: 2rem 2rem 2rem 0;
    }
    .image {
      clip-path: polygon(0% 0%, 100% 0%, 50% 100%, 0% 100%);
    }
  }
 
  p {
    font-size: ${Theme.textSize.textLg};
    line-height: 1.5;    
  }

  button {
    width: 130px;
    height: 40px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgb(0,0,0,0.5);
    border: none;

    background-color: ${Theme.colors.blue1};

    cursor: pointer;
    transition: ease-out all .3s;

    a {
      font-size: ${Theme.textSize.textSm};
      font-weight: 700;

      color: ${Theme.colors.white};
      text-decoration: none;
    }
    &:hover {
      background-color: ${Theme.colors.babyBlue};
      a {
        color: ${Theme.colors.blue1};
      }
    }
  }  

  //media for specific breaks
  @media (max-width: 1270px) {
    .content {
      gap: 0;
      .info {
        padding: 2rem;
        .title {
          h2 {
            font-size: ${Theme.textSize.titleCardMd};  
          }
          .img {          
            height: ${Theme.textSize.titleCardMd};
          }
        }
      }
    }
    p {
      font-size: ${Theme.textSize.textMd};
    }
  }

  @media (max-width: 1170px) {
    .flex-normal {
      .info {
        padding-right: 0;
      }
    }
    .flex-reverse {
      .info {
        padding-left: 0;
      }
    }
  }

  @media (max-width: 1130px) {
    .flex-normal, 
    .flex-reverse {
      .image {
        width: 340px;
        height: auto;
      }
    }
}

  @media (max-width: 973px) {
    .content {
      flex-direction: column-reverse;
    }

    .flex-normal, 
    .flex-reverse {
      .info {
        padding: 2rem;
      }
      .image {
        width: auto;
        height: 10rem;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        overflow: hidden;
      }
      .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 578px) {
    .content {
      .info {
        .title {
          h2 {
            font-size: ${Theme.textSize.titleCardSm};  
          }
          .img {          
            height: ${Theme.textSize.titleCardSm};
          }
        }
        .know-more {
          .whatsapp {
            font-size: 36px;
          }
        }
      }
    }
    
    .flex-normal, 
    .flex-reverse {
      .info {
        padding: 1.5rem;
      }
    }

    p {
      font-size: ${Theme.textSize.textMobileMd};
    }

    button {
      width: 120px;
      height: 36px;
      a {
        font-size: ${Theme.textSize.textSm};
      }
    }

  }

  @media (max-width: 457px) {
    .content {
      .info {
        .title {
          padding: 1rem 0 1.375rem 0;
          h2 {
            font-size: ${Theme.textSize.titleCardXSm};
          }
          .img {          
            height: ${Theme.textSize.titleCardSm};
          }
        }
        .know-more {
          .whatsapp {
            font-size: 30px;
          }
        }
      }  
    }
    .flex-normal, 
    .flex-reverse {
      .info {
        padding: 1rem;
      }
      .image {
        width: auto;
        height: 6rem;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        overflow: hidden;
      }
      .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    p {
      font-size: ${Theme.textSize.textMobileSm};
    }
    button {
      width: 100px;
      height: 30px;
      a {
        font-size: ${Theme.textSize.textMobileSm};
      }
    }
  }
`;