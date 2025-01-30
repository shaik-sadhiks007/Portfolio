import React from "react"
import "./Skills.css"

function Skills() {
  return (
    <section className="skills-section py-5" id="skills">
      <div className="container">
        <h2 className="display-2 text-center text-white mb-3">Skills</h2>
        <p className="text-center text-secondary mb-5">
          Here are some of my skills on which I have been working on for the past 4 years.
        </p>

        <div className="row g-4">
          {/* Programming Languages */}
          <div className="col-md-6">
            <div className="skill-card">
              <h3 className="skill-title">Programming Languages</h3>
              <div className="skill-items">
                <div className="skill-pill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />
                  <span>C</span>
                </div>
                <div className="skill-pill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
                  <span>C#</span>
                </div>
                <div className="skill-pill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                  <span>Java</span>
                </div>
                <div className="skill-pill">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    alt="Python"
                  />
                  <span>Python</span>
                </div>
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="col-md-6">
            <div className="skill-card">
              <h3 className="skill-title">Frontend</h3>
              <div className="skill-items">
                <div className="skill-pill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                  <span>HTML</span>
                </div>
                <div className="skill-pill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                  <span>CSS</span>
                </div>
                <div className="skill-pill">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt="Bootstrap"
                  />
                  <span>Bootstrap</span>
                </div>
                <div className="skill-pill">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                  />
                  <span>JavaScript</span>
                </div>
                <div className="skill-pill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  <span>React</span>
                </div>
                <div className="skill-pill">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                    alt="Material-UI"
                  />
                  <span>Material UI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="col-md-6">
            <div className="skill-card">
              <h3 className="skill-title">Backend</h3>
              <div className="skill-items">
                <div className="skill-pill">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                  />
                  <span>Node Js</span>
                </div>
                <div className="skill-pill">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="Express.js"
                  />
                  <span>Express Js</span>
                </div>
                <div className="skill-pill">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
                    alt="ASP.NET"
                  />
                  <span>ASP.NET</span>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture & Others */}
          <div className="col-md-6">
            <div className="skill-card">
              <h3 className="skill-title">Architecture & Others</h3>
              <div className="skill-items">
                <div className="skill-pill">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
                    alt="MVC Pattern"
                  />
                  <span>MVC Pattern</span>
                </div>
                <div className="skill-pill">
                  <span className="architecture-icon">CA</span>
                  <span>Clean Architecture</span>
                </div>
                <div className="skill-pill">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                  />
                  <span>GitHub</span>
                </div>
                <div className="skill-pill">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                    alt="VS Code"
                  />
                  <span>VS Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

