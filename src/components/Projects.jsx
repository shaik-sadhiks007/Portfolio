import React from "react"
import "./Projects.css"
import { Link } from "react-router-dom"

function Projects() {
  const projects = [
    {
      title: "Employee Management System",
      description:
        "Developed a Employee Management System using HTML5, CSS3, JavaScript, ASP.NET, C#, PostgreSQL, Razor pages",
      image: "https://cdn-icons-png.flaticon.com/512/5651/5651475.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "ASP.NET", "PostgreSQL", "C#"],
      link: "/mychamp",
    },
    {
      title: "Portfolio",
      description:
        "Explore my sleek portfolio, built with React.js and Bootstrap. Discover my skills and projects in an interactive way.",
      image: "https://cdn-icons-png.flaticon.com/512/5651/5651475.png",
      technologies: ["React Js"],
      link: "#",
    },
    {
      title: "Car Repair Services",
      description: "Implemented a Car Repair Services website using ReactJS.",
      image: "https://cdn-icons-png.flaticon.com/512/5651/5651475.png",
      technologies: ["ReactJs", "Bootstrap"],
      link: "https://github.com/shaik-sadhiks007/CarService_Website",
    },
  ]

  return (
    <section className="projects-section py-5" id="project">
      <div className="container">
        <h2 className="display-2 text-center text-white mb-3">Projects</h2>
        <p className="text-center text-secondary mb-5">Here are some of my Projects.</p>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="img-fluid" />
                </div>
                <div className="project-content">
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <Link
                    to={project.link}
                    target={project.link !== "/mychamp" ? "_blank" : undefined}
                    className="btn btn-light w-100"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

