import React from "react"
import "./About.css"

function About() {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-image-wrapper">
              <div className="binary-background"></div>
              <img
                src="https://shaikahmadnawaz.vercel.app/about-me.svg"
                alt="Developer illustration"
                className="about-image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h2 className="display-2 text-white mb-4">About Me</h2>
              <div className="about-text">
                <p className=" mb-4">
                  Hello, I'm <span className="text-danger fw-bold">Shaik Sadhik,</span> a passionate <span className="text-danger fw-bold">Full Stack
                    Developer</span> specializing in <span className="text-danger fw-bold">ASP.NET, C#,</span> and <span className="text-danger fw-bold"> MERN</span> stack. I enjoy building scalable web applications that
                  solve <span className="text-danger fw-bold">real-world problems</span> while delivering seamless <span className="text-danger fw-bold">user experiences.</span>
                </p>

                <p className="text-light mb-4">
                  Currently, I'm working as a <span className="text-danger fw-bold">Software Developer Intern </span> at
                  <span className="text-danger fw-bold"> TrooperCruit</span>, where I have developed an <span className="text-danger fw-bold">Employee Management
                    System</span> integrating payroll, attendance, and leave management using <span className="text-danger fw-bold">ASP.NET, C#, PostgreSQL, </span> and <span className="text-danger fw-bold">Razor
                      Pages.</span>  My work has helped optimize <span className="text-danger fw-bold">HR processes,</span> automate payroll calculations, and improve system
                  efficiency.
                </p>

                <p className="text-light">
                  Beyond my professional work, I have a strong foundation in <span className="text-danger fw-bold">JavaScript, React.js, SQL,</span> and <span className="text-danger fw-bold">Python</span>  and
                  I love exploring new technologies to enhance my development skills. I am always eager to take on new
                  challenges and collaborate on <span className="text-danger fw-bold">innovative projects.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

