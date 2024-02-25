import { useState } from "react"
import "./NavBar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { MobileNav } from "./MobileNav/MobileNav";

export const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = ()=>{
        setOpenMenu(!openMenu)
        console.log(openMenu);
    }
    
    const handleHireMe = ()=>{
        window.open(`https://api.whatsapp.com/send/?phone=543813019081&text=Hola%21+Quisiera+Contratar+Un+Servicio+&type=phone_number&app_absent=0`)
    }
    
  return (
   <>
   <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}></MobileNav>
    <nav className="nav-wrapper">
        <div className="nav-content">
            <img src="./assets/images/logo.png" alt="logo" className="logo" />

            <ul>
                <li>
                    <a href="#" className="menu-item">Home</a>
                </li>
                <li>
                    <a href="#skills" className="menu-item">Skills</a>
                </li>
                <li>
                    <a href="#project" className="menu-item">Work Experience</a>
                </li>
                <li>
                    <a href="#ContactMe" className="menu-item">Contact Me</a>
                </li>
                <button className="contact-btn" onClick={handleHireMe}>
                    Hire Me
                </button>
            </ul>
            
            <button className="menu-btn" onClick={toggleMenu}>
                {openMenu ? <CloseIcon></CloseIcon> : <MenuIcon></MenuIcon>}
            </button>
        </div>

    </nav>
   </>
  )
}
