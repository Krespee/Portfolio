import "./ContactInfoCard.css"

export const ContactInfoCard = ({iconUrl, text}) => {

  const copyInfo =(info)=>{
    navigator.clipboard.writeText(info)
    let p = document.getElementById(info)
    p.textContent="Copy!"
    p.classList.add("activetext")
    setTimeout(()=>{
      p.classList.remove("activetext")
      p.textContent = info
    },800)
    
  }
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img width={"50px"} src={iconUrl} alt={text}/>
      </div>
      <div className="p-content">
       <p id={text}>{text}</p>
       <img onClick={()=>copyInfo(text)} className="copy-logo" src="./assets/images/copy-logo.png" alt="copy-logo"/>
      </div>
    </div>
  )
}
