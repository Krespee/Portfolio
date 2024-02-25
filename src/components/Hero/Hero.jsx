import "./Hero.css"

export const Hero = () => {
  return (
    <>
        <section className="hero-container">
            <div className="hero-content">
                <h2>Nayn Zahir Hollaiban Full-Stack Junior Developer</h2>
                <p>
                Hello! I'm Nayn Zahir Hollaiban, a passionate JUNIOR full-stack developer skilled in HTML5, CSS3, JavaScript, Node.js, Express, MongoDB, React.js, Git, and GitHub. I specialize in creating engaging user interfaces and building robust servers for modern web applications. With a focus on code quality and efficiency, I aim to deliver innovative solutions that meet client needs. Excited to contribute to challenging projects and help bring ideas to life!
                </p>
            </div>

            <div className="hero-img">
                <div className="hero-top-container">
                    <div className="hero-img-container">
                        <div className="tech-icon">
                            <img src="./assets/images/react-logo.png" alt="react-logo" />
                        </div>
                        <div className="tech-icon">
                            <img src="./assets/images/node-logo.png" alt="node-logo" />
                        </div>
                    </div>

                    <img src="./assets/images/myphoto.JPG" alt="my-photo" />

                    <div className="hero-img-container">
                        <div className="tech-icon">
                            <img src="./assets/images/git-logo.png" alt="git-logo" />
                        </div>
                        <div className="tech-icon">
                            <img src="./assets/images/github-logo.png" alt="github-logo" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="tech-icon">
                        <img className="html-img" src="./assets/images/html-logo.png" alt="html-logo" />
                    </div>
                    <div className="tech-icon">
                        <img  src="./assets/images/css-logo.png" alt="css-logo" />
                    </div>
                    <div className="tech-icon">
                        <img  src="./assets/images/js-logo.png" alt="js-logo" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
