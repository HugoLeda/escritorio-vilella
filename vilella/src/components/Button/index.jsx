export default function Button({text, target, link}) {
  return (
    <div className="link flex">
      <button> 
        <a href={link} target={target}> {text} </a>
      </button>
    </div>
  )
}