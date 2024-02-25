import { useState } from "react"
import "./Projects.css"
import { ProjectNav } from "./ProjectNav/ProjectNav"
import { ProjectCard } from "./ProjectCard/ProjectCard"

export const Projects = () => {
  const TAB = [
    { id: 0, name: "Tab 1" },
    { id: 1, name: "Tab 2" },
    { id: 2, name: "Tab 3" }
  ];

  const [selectedTab, setSelectedTab] = useState(TAB[0])


  const handleClick =(data)=>{
    setSelectedTab(data)
  }

  return (
    <section className="project-container" id="project">
        <div className="project-content">
            <h5>My Projects</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut neque, ipsam ullam tempora magni eius atque ex voluptates debitis a non eligendi officia dolorum asperiores nam et quibusdam quaerat! Voluptatibus!</p>
            <nav className="project-nav-content">
                <ul>
                  {TAB.map((item)=>(
                    <ProjectNav 
                    key={item.id} 
                    title={item.name}
                    onClick={()=>handleClick(item)}
                    isActive={selectedTab.name === item.name}
                    >
                    </ProjectNav>
                  ))}
                </ul>
            </nav>
        </div>
        <div className="projects">
            <ProjectCard tab={selectedTab.id}></ProjectCard>
        </div>
    </section>
  )
}
