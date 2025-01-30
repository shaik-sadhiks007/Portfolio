import React, { useState } from "react"
import "./Experience.css"

function Experience() {
  const [activeCard, setActiveCard] = useState(null)

  const experienceData = [
    {
      company: "TrooperCruit",
      position: "Software Developer Intern",
      period: "09/2024 – Present",
      location: "Remote, India",
      description: [
        "Developed a full-stack employee management system using ASP.NET, C#, PostgreSQL, and Razor Pages, improving backend and frontend integration for efficient employee task management.",
        "Implemented attendance tracking functionality, automatically marking absent employees, resulting in a 15% reduction in manual attendance errors.",
        "Created a payslip generation system with automated calculations for net salary, EPF, tax, and leave deductions, reducing HR's payroll processing time by 20%.",
        "Enhanced leave management by adding a Half Day option, automating leave deductions and integration with the payroll system, resulting in 10% faster payroll processing.",
      ],
      technologies: ["ASP.NET", "C#", "MVC", "PostgreSQL", "Razor Pages", "HTML", "CSS", "JavaScript", "REST APIs"],
    },
    {
      company: "LetsNotify",
      position: "Full Stack Developer (MERN Stack) Intern",
      period: "01/2024 – 07/2024",
      location: "Remote, India",
      description: [
        "Developed responsive UI components based on Figma designs using React and MUI, improving frontend functionality and user experience.",
        "Implemented backend features using NestJS and SQL, creating API endpoints for data management and secure communication.",
        "Proactively incorporated client feedback to improve functionality and resolve issues, resulting in a notable improvement in user engagement.",
      ],
      technologies: ["React", "MUI", "NestJS", "SQL", "REST APIs"],
    },
  ]

  return (
    <section className="experience-section py-5" id="experience">
      <div className="container">
        <h2 className="display-2 text-center text-white mb-3">Experience</h2>
        <p className="text-center text-secondary mb-5">My professional journey and internships.</p>

        <div className="experience-cards">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`experience-card ${activeCard === index ? "active" : ""}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="card-header">
                <h3 className="card-title">{exp.position}</h3>
                <h4 className="card-company">{exp.company}</h4>
              </div>
              <div className="card-body">
                <p className="card-period">{exp.period}</p>
                <p className="card-location">{exp.location}</p>
                <ul className="card-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="card-technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

