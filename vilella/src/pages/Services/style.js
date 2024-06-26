import styled from "styled-components";
import media from "styled-media-query";
import Theme from "../../styles/theme";

export const Servicespage = styled.section `
  //all of the page
  max-width: 100vw;
  padding: 0 10%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  gap: 5rem;

  h1 {
    user-select: none;
    font-size: ${Theme.textSize.titleLg};
    font-weight: 600;
    color: ${Theme.colors.blue1};

    span {
      font-weight: 700;
      color: ${Theme.colors.red};
    }
  }

  p {
    font-size: ${Theme.textSize.textLg};
    line-height: 1.5;
  }


  ${media.lessThan("large")`
    margin-top: 2rem;
    gap: 3rem;

    h1 {
      font-size: ${Theme.textSize.titleMobileLg};
    }

    p {
      font-size: ${Theme.textSize.textMobileLg};
    }
  `}
  ${media.lessThan("medium")`

    p {
      font-size: ${Theme.textSize.textMobileMd};
    }

  `}

  ${media.lessThan("small")`
  
    h1 {
      font-size: ${Theme.textSize.titleMobileMd};
    }

    p {
      font-size: ${Theme.textSize.textMobileSm};
    }


  `}
`;