import { Steps } from "./style"

export default function ClientCenterStep({number, icon, title, text, arrow}) {
  return(
    <Steps>
      <div className="flow-steps flex">
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