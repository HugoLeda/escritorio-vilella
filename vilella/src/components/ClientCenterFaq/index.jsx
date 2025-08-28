import { useState } from "react"
import { Faq } from "./style"

export default function ClientCenterFaq({ask, answer}){
const [open, setOpen] = useState(false);
  return (
    <Faq>
      <div className="faq-items flex-column">
        <div className ="faq-ask" onClick={() => setOpen(!open)}>
          <div className="ask-wrapper flex">
            <h3>{ask}</h3>
            <div className={`arrow ${open ? 'open' : ''}`}></div>
          </div>
            <div className={`faq-answer ${open ? 'open' : ''}`}>
              <p>{answer}</p>
            </div>
        </div>
      </div>
    </Faq>
  )

}