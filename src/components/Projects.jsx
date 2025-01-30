import "./Projects.css"
import { Link } from "react-router-dom"
import TrooperCruitIcon from "../assets/Troopercruit.png"
import CarRepairIcon from "../assets/CarRepair.jpg"
import EcommerceIcon from "../assets/ecommerce.jpg"

function Projects() {
  const projects = [
    {
      title: "Employee Management System",
      description:
        "Built an Employee Management System designed to efficiently manage employee records, track attendance, handle leave requests, and generate payroll reports. Razor Pages is used to create dynamic and responsive user interfaces for smooth user experience.",
      image: TrooperCruitIcon,
      technologies: ["HTML5", "CSS3", "JavaScript", "ASP.NET", "PostgreSQL", "C#"],
      link: "/mychamp",
    },
    {
      title: "Ecommerce Website",
      description:
        "A fully functional ecommerce website showcases dynamic product listings, a shopping cart, and a seamless checkout experience, all powered by a backend server and styled using Bootstrap.",
      image: EcommerceIcon,
      technologies: ["React Js", "Node Js", "Express Js", "Bootstrap"],
      link: "https://github.com/shaik-sadhiks007/shoppingCart",
    },
    {
      title: "Car Repair Services",
      description:
        "A Car Repair Services website built for Mechanics can manage repair requests, view service details, and handle appointments, while admins have control over service management and user data. The platform features a user-friendly interface.",
      image: CarRepairIcon,
      technologies: ["React Js", "Bootstrap", "Redux", "JavaScript", "CSS3", "HTML5"],
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
              <div className="project-card d-flex flex-column">
                <div className="project-image">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="img-fluid" />
                </div>
                <div className="project-content d-flex flex-column flex-grow-1">
                  <div className="project-technologies mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-info flex-grow-1 d-flex flex-column">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description flex-grow-1">{project.description}</p>
                  </div>
                  <Link
                    to={project.link}
                    target={project.link !== "/mychamp" ? "_blank" : undefined}
                    className="btn btn-light w-100 mt-3"
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

