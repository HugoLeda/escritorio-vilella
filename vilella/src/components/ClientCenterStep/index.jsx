import { Steps } from "./style"

export default function ClientCenterStep({img, title, text}) {
  return(
    <Steps>
      <div className="tutorial">
        <aside className="img">
          <img src={img} alt={"Imagem do Onvio Portal do Cliente"} />
        </aside>
        <main className="steps">
          <h2>{title}</h2>
          <p>{text}</p>
        </main>
      </div>
    </Steps>
  )
}