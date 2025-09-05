import { Actions } from "./style"

export default function LgpdActions({number,icon,title,text, bgColor}) {
  return (
    <Actions>
      <div className="act flex">
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