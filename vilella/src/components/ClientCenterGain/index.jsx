import { Gains } from "./style"

export default function ClientCenterGain({img, text}) {
  return(
    <Gains>      
      <aside className="img">
        <img src={img} alt={""} />
      </aside>
      <p>{text}</p>
    </Gains>
  )
}