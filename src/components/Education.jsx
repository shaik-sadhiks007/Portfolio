import React from "react"
import "./Education.css"

function Education() {
  const educationData = [
    {
      years: "2019 - 2023",
      degree: "B.Tech - Electronics and Communication Engineering",
      institution: "Maharaj Vijayaram Gajapathi Raj College of Engineering (A), Vizianagaram",
      grade: "CGPA - 7.98",
    },
    {
      years: "2017 - 2019",
      degree: "Intermediate - Maths, Physics, and Chemistry",
      institution: "Surya Junior College, Jangareddigudem",
      grade: "CGPA - 9.94",
    },
    {
      years: "2016 - 2017",
      degree: "Secondary School Certificate (SSC)",
      institution: "Loyola English Medium School, Jangareddigudem",
      grade: "CGPA - 9.7",
    },
  ]

  return (
    <section className="education-section py-5" id="education">
      <div className="container">
        <h2 className="display-2 text-center text-white mb-3">Education</h2>
        <p className="text-center text-secondary mb-5">My educational background and qualifications.</p>

        <div className="timeline">
          {educationData.map((edu, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="timeline-content">
                <div className="timeline-date">
                  <span className="text-danger">{edu.years}</span>
                </div>
                <h3 className="timeline-title">{edu.degree}</h3>
                <p className="timeline-institution">{edu.institution}</p>
                <p className="timeline-grade">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

