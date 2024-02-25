import { SkillCard } from "./SkillCard/SkillCard.jsx";
import { SKILLS } from "../../utils/data.js";
import "./Skills.css"
import { useState } from "react";
import { SkillsInfoCard } from "./SkillsInfo/SkillsInfoCard.jsx";
export const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) =>{
        setSelectedSkill(data)
    };

  return (
    <>
    <section id="skills" className="skills-container">
        <div className="img-skills-container">
        <img className="img-skills" src="https://skillicons.dev/icons?i=react,bootstrap,html,css,vscode,github,figma,git,nodejs,javascript,express,mongodb " alt="" />

        </div>
        <h5>Technical Proficency</h5>
        
        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item)=>(
                    <SkillCard 
                    key={item.title} 
                    iconUrl={item.icon} 
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={()=>handleSelectSkill(item)}
                    />
                ))}
            </div>

            <div className="skills-info">
                <SkillsInfoCard
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
                />
            </div>
        </div>
    </section>
    </>
  )
}
