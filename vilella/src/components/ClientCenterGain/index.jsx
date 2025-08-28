import { Gains } from "./style"

export default function ClientCenterGain({icon,title, text}) {
  return(
    <Gains> 
      <div className="feature">
        <div className="icon">
          <span>{icon}</span>
        </div>
        <div className="description">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>     
    </Gains>
  )
}