import { NavBar } from './components/NavBar/NavBar.jsx'
import { Hero } from "./components/Hero/Hero.jsx"
import { Skills } from './components/Skills/Skills.jsx'
import { Projects } from './components/Projects/Projects.jsx'
import { ContactMe } from './components/ContactMe/ContactMe.jsx'
import { Footer } from './components/Footer/Footer.jsx'
export const App = () => {
  return (
    <>
    <NavBar/>
    <div className="container">
      <Hero/>

      <Skills/>

      <Projects/>

      <ContactMe/>
    </div>
    <Footer/>
    </>
  )
}
