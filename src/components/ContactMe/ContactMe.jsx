import "./ContactMe.css"
import {ContactInfoCard} from "./ContactInfoCard/ContactInfoCard"
import { ContactForm } from "./ContactForm/ContactForm"

export const ContactMe = () => {
  return (
    <section id="ContactMe" className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex:1}}> 
              <ContactInfoCard
                iconUrl="./assets/images/email.png"
                text="NaynZahir@gmail.com"
              /> 
              <ContactInfoCard
                iconUrl="./assets/images/github-logo.png"
                text="https://github.com/krespee"
              /> 
            </div>
            <div style={{flex:1}}>
              <ContactForm/>
            </div>
        </div>
    </section>
  )
}
