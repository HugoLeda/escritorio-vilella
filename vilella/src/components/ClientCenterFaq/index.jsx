import { useState } from "react"
import { Faq } from "./style"
import { useEffect, useRef } from "react";

export default function ClientCenterFaq({ask, answer}){
  
  const [open, setOpen] = useState(false);

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

  /* class .scroll-effect END*/


  return (
    <Faq>
      <div className="faq-items flex-column scroll-effect">
        <div className ="faq-ask" onClick={() => setOpen(!open)}>
          <div className="ask-wrapper flex">
            <h3>{ask}</h3>
            <div className={`arrow ${open ? 'open' : ''}`}></div>
          </div>
            <div className={`faq-answer ${open ? 'open' : ''}`}>
              <p dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
        </div>
      </div>
    </Faq>
  )

}