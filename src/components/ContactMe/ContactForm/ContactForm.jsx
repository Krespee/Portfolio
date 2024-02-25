import "./ContactForm.css"

export const ContactForm = () => {

  return (
    <div className="contact-form-content">
        <form action="https://formsubmit.co/naynzahir@gmail.com" method="POST">
            <div className="name-container">
                <input type="text" name="Firstname" placeholder="First Name"/>
                <input type="text" name="Lastname" placeholder="Last Name"/>
            </div>
            <input type="text" name="Email" placeholder="Email"/>
            <textarea type="text" name="message" placeholder="Message" rows={3}/>

            <button>SEND</button>
        </form>
    </div>
  )
}
