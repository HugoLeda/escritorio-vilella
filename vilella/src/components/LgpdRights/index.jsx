import { useState } from "react"
import { Rights } from "./style"

export default function LgpdRights({title, text}){

  return (
    <Rights>
      <div className="right-items flex-column">
        <div className ="right-title">
          <h3>{title}</h3>
        </div>
        <div className="right-text">
          <p>{text}</p>      
        </div>
      </div>
    </Rights>
  )

}