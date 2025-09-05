import { LgpdContainer } from "./style"

export default function LgpdGuide({icon,text}) {
  return (
    <LgpdContainer>
      <div className="feature flex">
        <div className="icon">
          <span>{icon}</span>
        </div>
        <div className="description">
          <p>{text}</p>
        </div>
      </div>
    </LgpdContainer>
  )

}