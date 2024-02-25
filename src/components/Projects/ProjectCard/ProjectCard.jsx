import "./ProjectCard.css"
import { PROJECTS } from "../../../utils/data"

export const ProjectCard = ({tab}) => {
  const handdleClick = (data) =>{
    window.open(data.URL)
  }

  return (
    <>
    {PROJECTS[tab] != undefined ? 
    PROJECTS[tab].map((item)=>(
      <a onClick={()=>handdleClick(item)} key={item.title} className="project-card-img">
        <img src={item.imgUrl} alt={item.title} />
        <div className="project-card-txt">
          <h4>{item.title}</h4> 
          <p>{item.description}</p>
        </div>
      </a>
    ))
    : 
      <a key={99} className="project-card-img">
        <img src="" alt="" />
        <div className="project-card-txt soon">
          <h4>{"Coming Soon"}</h4> 
          <p>{"Project in Progress"}</p>
        </div>
      </a>
  }
    </>
  )
}
