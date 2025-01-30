import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Education from "./components/Education"
import About from "./components/About"
import Experience from "./components/Experience"
import Header from "./components/Header"

function Dashboard() {
  return (
    <div className="app-wrapper bg-black text-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <main className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="pe-lg-5">
              <h1 className="display-3 fw-bold lh-sm mb-4">
                YOUR VISION,
                <br />
                MY MISSION
              </h1>
              <p className="text-secondary mb-5">
                Building the Creative Journey Together. Your Aspirations at the Heart of Every Design - Where Your
                Unique Dreams Meet My Dedication to Craft Exceptional Visual Experiences
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-light btn-lg px-4">Explore My Portfolio</button>
                <a href="#contact">
                  <button className="btn btn-outline-light btn-lg px-4">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image-wrapper">
              <img
                // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-27%20133149-7pgpOI6RicbSIw04GvpJbjso5s4jl7.png"
                // src="./src/assets/sadhik1.png"

                src="https://shaikahmadnawaz.vercel.app/me.svg"
                alt="Professional headshot"
                className="hero-image"
              />
            </div>
          </div>
        </div>

        <About />

        <Experience />

        <Projects />

        <Education />

        <Skills />

        <Contact />


        {/* Statistics */}
        {/* <div className="row statistics g-4 mt-5">
          <div className="col-md-3 col-6">
            <div className="text-center">
              <h2 className="display-5 fw-bold mb-2">
                10<span className="text-danger">+</span>
              </h2>
              <p className="text-secondary small">Years of Design Experience</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="text-center">
              <h2 className="display-5 fw-bold mb-2">
                200<span className="text-danger">+</span>
              </h2>
              <p className="text-secondary small">Successful Projects Completed</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="text-center">
              <h2 className="display-5 fw-bold mb-2">
                95<span className="text-danger">%</span>
              </h2>
              <p className="text-secondary small">Client Satisfaction Rate</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="text-center">
              <h2 className="display-5 fw-bold mb-2">5</h2>
              <p className="text-secondary small">Industry Awards Won</p>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  )
}

export default Dashboard

