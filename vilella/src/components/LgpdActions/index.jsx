import { useEffect, useRef } from "react";

import { Actions } from "./style"

export default function LgpdActions({number,icon,title,text, bgColor}) {

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
    <Actions>
      <div className="act flex scroll-effect">
        <div className="icon-number flex">
          <div className="icon flex" style={{ backgroundColor: bgColor}}>
            <span>{icon}</span>
          </div>
          <div className="number flex">
            <span>{number}</span>
          </div>
        </div>
        <div className="description">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>   
      </div>
    </Actions>
  )
}