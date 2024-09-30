import { LgpdContainer } from "./style"

export default function LgpdGuide({icon,title,text}) {
  return (
    <LgpdContainer>
      <div className="feature">
        <div className="icon">
          <span>{icon}</span>
        </div>
        <div className="description">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </LgpdContainer>
  )

}