export const ProjectNav = ({title, onClick, isActive}) => {
  return (
        <li 
        className={`project-menu-item ${isActive ? "active": ""}`} 
        onClick={onClick}
        >
            {title}
        </li>
  )

}