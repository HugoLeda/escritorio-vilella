import { useEffect, useState } from "react";
import styled from "styled-components";
import Theme from "../../styles/theme";

export default function Cookies() {

  const CookieAd = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1.25rem;
    padding: .75rem 1.5rem;
    width: 80vw;
    z-index: 100;
    
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 14px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

    .cookie-wrapper {
      display: flex;
      gap: 3rem;
      justify-content: space-between;
      align-items: center;
    }

    p {
      font-size: ${Theme.textSize.textMobileSm};
      color: ${Theme.colors.gray};
      margin: 0;

      a {
        color: ${Theme.colors.gray1};
      }
    }

    button {
      padding: .2rem 1rem;
      height: 45px;
      border: none;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgb(0,0,0,0.2);
      transition: ease-out all .2s;
      background-color: #0d2daa;
      font-weight: 400;
      user-select: none;
      color: ${Theme.colors.white};
      text-transform: uppercase;

      &:hover {
        background-color: ${Theme.colors.babyBlue};
        color: ${Theme.colors.blue};
      }
    }

    @media (max-width: 900px) {
      .cookie-wrapper {
        flex-direction: column;
        gap: .5rem;
      }
    }
  `;

  
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (accepted) return;

    function handleScroll() {
      if (window.scrollY > 120) {
        setShowCookie(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  function handleAcceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookie(false);
  }

  if (!showCookie) return null;

  return (
    <CookieAd>
      <div className="cookie-wrapper flex">
        <div>
          <p>
            Utilizamos cookies para melhorar sua experiência de navegação. Saiba mais em nossa <a href="/privacy-policy#cookie-policy">Política de Privacidade</a>.
          </p>
        </div>
        <div>
          <button onClick={handleAcceptCookies}>Entendi</button>
        </div>
      </div>
    </CookieAd>
  );
}
