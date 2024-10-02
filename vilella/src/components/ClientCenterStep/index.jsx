import { Steps } from "./style"

export default function ClientCenterStep({img, title, text}) {
  return(
    <Steps>
      <div className="tutorial">
        <aside className="img">
          <img src={img} alt={"Imagem do Onvio Portal do Cliente"} />
        </aside>
        <main className="steps">
          <h3>{title}</h3>
          <p>{text}</p>
        </main>
      </div>
    </Steps>
  )
}