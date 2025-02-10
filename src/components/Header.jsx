import React from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (to) => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      const targetElement = document.getElementById(to);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-2 fixed-top blur-bg">
      <div className="container">
        <RouterLink className="navbar-brand fw-bold fs-2" to="/">
          <span className="text-danger">SA</span>
          <span>DHIK</span>
        </RouterLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <ScrollLink
                className="nav-link px-3"
                to="about"
                smooth={true}
                duration={500}
                onClick={() => handleScroll("about")}
                activeClass="active-link" // Use Bootstrap classes
                spy={true} // Enable spy mode
                offset={-70} // Adjust offset for fixed header
                style={{ cursor: "pointer" }}
              >
                ABOUT
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link px-3"
                to="experience"
                smooth={true}
                duration={500}
                onClick={() => handleScroll("experience")}
                activeClass="active-link" 
                spy={true} // Enable spy mode
                offset={-70} // Adjust offset for fixed header
                style={{ cursor: "pointer" }}
              >
                EXPERIENCE
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link px-3"
                to="project"
                smooth={true}
                duration={500}
                onClick={() => handleScroll("project")}
                activeClass="active-link" // Use Bootstrap classes
                spy={true} // Enable spy mode
                offset={-70} // Adjust offset for fixed header
                style={{ cursor: "pointer" }}
              >
                PROJECTS
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link px-3"
                to="education"
                smooth={true}
                duration={500}
                onClick={() => handleScroll("education")}
                activeClass="active-link" // Use Bootstrap classes
                spy={true} // Enable spy mode
                offset={-70} // Adjust offset for fixed header
                style={{ cursor: "pointer" }}
              >
                EDUCATION
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link px-3"
                to="skills"
                smooth={true}
                duration={500}
                onClick={() => handleScroll("skills")}
                activeClass="active-link" // Use Bootstrap classes
                spy={true} // Enable spy mode
                offset={-70} // Adjust offset for fixed header
                style={{ cursor: "pointer" }}
              >
                SKILLS
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link px-3"
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => handleScroll("contact")}
                activeClass="active-link" // Use Bootstrap classes
                spy={true} // Enable spy mode
                offset={-70} // Adjust offset for fixed header
                style={{ cursor: "pointer" }}
              >
                CONTACT
              </ScrollLink>
            </li>
          </ul>
          <a
            href="https://drive.google.com/file/d/1kWsMBZarb4x5I5HBGpBR1efZ85FdsV5T/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-outline-danger">
              Resume <i className="fa-solid fa-download"></i>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;