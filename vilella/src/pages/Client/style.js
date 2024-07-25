import styled from "styled-components";
import Theme from "../../styles/theme";

export const Clientpage = styled.section `
  max-width: 100vw;
  padding: 0 10%;
  gap: 5rem; 
  
  margin-top: 5rem;

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  header {
    gap: 2rem;

    h1 {
      user-select: none;
      font-size: ${Theme.textSize.titleCardXLg};
      font-weight: 600;
      color: ${Theme.colors.blue1};
      width: 78%;

      span {
        user-select: none;
        font-size: ${Theme.textSize.titleCardXLg};
        font-weight: 600;
        text-transform: uppercase;
      }
    }

    p {
      font-size: ${Theme.textSize.textLg};
      line-height: 1.5;
  }

    button {
      width: 175px;
      height: 40px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgb(0,0,0,0.5);
      border: none;

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
    .link {
      padding: 1.5rem;
    }
  }


  .img {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 1270px) {
    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

`