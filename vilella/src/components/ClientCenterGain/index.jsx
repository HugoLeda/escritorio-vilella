import { Gains } from "./style"

export default function ClientCenterGain({img, alt, text}) {
  return(
    <Gains>      
      <aside className="img">
        <img src={img} alt={alt} />
      </aside>
      <p>{text}</p>
    </Gains>
  )
}