import styled from "styled-components"
import Theme from "../../styles/theme"
import { useEffect, useRef } from "react";

const Advantages = styled.div `

  .advantage-card {
    flex-direction: column;
    max-width: 320px;
    padding: 2.5rem;
    border: 1px solid ${Theme.colors.white};
    border-radius: 40px;      
    
  h3 {
    font-size: ${Theme.textSize.textMobileMd};
  }
    p {
      font-size: ${Theme.textSize.textMobileSm};
      color: ${Theme.colors.white};
      margin: 0;
    }
    

  }

  @media (max-width: 960px) {
    
    .advantage-card {
      p {
        font-size: ${Theme.textSize.textMobileSm};
      }
    }

  }

`

export default function AboutAdvantages({icon,title,place,text}) {

  /*class .scroll-effect start*/

  const lastScrollY = useRef(0);

  useEffect(() => {
    let scrollDirection = "down";

    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        scrollDirection = "down";
      } else {
        scrollDirection = "up";
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) {
            el.classList.remove("fade-up", "fade-down");

            if (scrollDirection === "down") {
              el.classList.add("visible", "fade-up");
            } else {
              el.classList.add("visible", "fade-down");
            }
          } else {
            el.classList.remove("visible", "fade-up", "fade-down");
          }
        });
      },
      {
        threshold: 0.01,
      }
    );

    const elements = document.querySelectorAll(".scroll-effect");
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return(
    <>
    <Advantages>
      <div className={`place${place}`}>
        <div className="advantage-card flex scroll-effect">
          <div className="icon">{icon}</div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </Advantages>
    </>
  )
}