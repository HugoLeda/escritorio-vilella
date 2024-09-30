import styled from "styled-components"
import Theme from "../../styles/theme"
import media from "styled-media-query"

export const Lgpdpage = styled.div `
  max-width: 1920px;//100vw; //adjust 
  margin: 2rem auto 0 auto;
  padding: 0 10%;
  
  display: flex;
  flex-direction: column;
  gap: 5rem;

  .flex {
    display: flex;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  h1 {
    user-select: none;
    font-size: ${Theme.textSize.titleLg};
    font-weight: 600;
    color: ${Theme.colors.blue1};

    span {
      user-select: none;
      font-size: ${Theme.textSize.titleLg};
      font-weight: 600;
      color: ${Theme.colors.red};
      }
  }

  h2 {
    user-select: none;
    font-size: ${Theme.textSize.titleMobileLg};
    font-weight: 600;
    color: ${Theme.colors.blue1};

    span {
      user-select: none;
      font-size: ${Theme.textSize.titleMobileLg};
      font-weight: 600;
      color: ${Theme.colors.red};
      }
    }

  h3,h4 {
    user-select: none;
    font-size: ${Theme.textSize.titleMd};
    color: ${Theme.colors.blue1};
    font-weight: 600;

  }

  p {
    font-size: ${Theme.textSize.textLg};
    line-height: 1.5;
  }

  header {
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    width: 100%;

    .outdoor {
      gap: 0;
      width: 60%;
      word-wrap: break-word;

      h1 {
        font-size: ${Theme.textSize.titleClientXLg};

        span {
          font-size: ${Theme.textSize.titleClientXLg};
          text-transform: uppercase;
          color: ${Theme.colors.blue1};
        }
      }
    }

    .img {
    justify-content: center;
    width: 460px;

    user-select: none;

    img {
      width: 460px;
      height: auto;
    }
  }

  }

  .link {
      justify-content: center;
      padding: 1rem 1rem 0 0;
      button {
        width: 150px;
        height: 40px;
        border-radius: 6px;
        box-shadow: 0 2px 8px rgb(0,0,0,0.5);
        border: none;

        user-select: none;
        background-color: ${Theme.colors.blue1};

        cursor: pointer;
        transition: ease-out all .2s;
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
  }

  .law {
    .owner-rights {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      h2 {
        text-align: center;
      }
      .law-features {
        gap: 3.5rem;
        p {
          font-size: ${Theme.textSize.textMd};
        }
      }
    }

  }

  .compliance {
    .compliance-view {
      width: 100%;
      h1 {
        width: 350px;
        word-wrap: break-word;
        line-height: .8;
        padding-bottom: 1.2rem;
      span{
        font-size: ${Theme.textSize.titleMobileLg};
      }
      }
    }
    
    .guidelines {
      text-align: center;
      gap: 2rem;
      
      .guide-features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 4rem;
        
        p {
          font-size: ${Theme.textSize.textMd};
        }
      }
    }
    
  }
    
  .dpo {
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    .dpo-info {
      width: 50%;
    }
    a {
      text-decoration: none;
      color: ${Theme.colors.gray1};
      span {
            font-size: ${Theme.textSize.textMd};
          }

      h1 {
        span{
          font-size: ${Theme.textSize.titleMobileLg};
        }
      }
    }

    .dpo-contact {
      gap: .25rem;
    }
    .dpo-icons {
      align-items: center;
      gap: .5rem;
      span {
        font-size: ${Theme.textSize.textMd};
      }
    }

    .img {
      justify-content: center;
      width: 450px;
      height: auto;

      user-select: none;
      transition: linear all .2s;
      &:hover {
        box-shadow: 0 0 8px rgb(0,0,0,0.4);
        transform: scale(1.05);
      }

      img {
        width: 450px;
        height: auto;
      }
  }
  }


  @media (max-width: 1190px) {
    header {
      .outdoor {
        h1 {
          font-size: ${Theme.textSize.titleMobileMd};
          span {
            font-size: ${Theme.textSize.titleMobileMd};
          } 
        }
      }
      
      .img {
        width: 380px;
        img {
          width: 380px;
          height: auto;
        }
      }
    }

    .compliance {
      width: 100%;
      h1 {
        width: 250px;
        word-wrap: break-word;
        span {
          line-height: 3rem;
        }
      }
    }

    .dpo {
      h1 {
        font-size: ${Theme.textSize.titleLg};
      }
      .dpo-info {
        width: 100%;
      }
      flex-direction: column;
    }
  }
 


  @media (max-width: 1080px) {
    .law {
      .owner-rights {
        .law-features {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
      }
    }
    .compliance {
      .guidelines {
        .guide-features {
          gap: 2rem;
        }
      }
    }
  }

  @media (max-width: 926px) {
    gap: 2rem;
    text-align: justify;
    
    header {
      flex-direction: column-reverse;
      justify-content: center;
      gap: 2rem;
      .outdoor {
        width: 100%;
      }
    }
  }

  @media (max-width: 600px) {
    .law,
    .compliance,
    .dpo {
      h1 {
      font-size: ${Theme.textSize.titleMobileLg};
      span {
        font-size: ${Theme.textSize.titleMobileLg};
      }
      }
      h2 {
        font-size: ${Theme.textSize.titleMobileMd};
        span {
          font-size: ${Theme.textSize.titleMobileMd};
        }
      }
      h3 {
        font-size: ${Theme.textSize.titleMobileMd};
      }
    }

    .compliance {
      .guidelines {
        .guide-features {
          gap: 1.5rem;
        }
      }
    }

    .dpo {
      .img {
        width: 300px;
        height: auto;

        img {
          width: 300px;
          height: auto;
        }
    } 
  }
}
`