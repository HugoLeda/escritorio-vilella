import { Steps } from "./style"
import { useEffect, useRef } from "react";

export default function ClientCenterStep({number, icon, title, text}) {
  
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

  return(
    <Steps>
      <div className="flow-steps flex scroll-effect">
        <div className="number flex">
          <span>{number}</span>
        </div>
        <div className="icon flex">
          <span>{icon}</span>
        </div>
        <div className="description">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>   
      </div>
    </Steps>
  )
}