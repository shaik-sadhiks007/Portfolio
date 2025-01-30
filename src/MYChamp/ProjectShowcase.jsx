import React, { useState } from "react"
import { Calendar, Users, DollarSign, FileText } from "lucide-react"
import "./ProjectShowcase.css"
import { AttendanceCalendar } from "./Attendance"
import { LeaveManagement } from "./LeaveManagement"
import { PayrollSystem } from "./PayrollSystem"
import { SalarySlip } from "./SalarySlip"

function ProjectShowcase() {
  const [selectedFeature, setSelectedFeature] = useState(null)

  const features = [
    {
      id: "attendance",
      title: "Attendance Calendar",
      icon: Calendar,
      component: AttendanceCalendar,
      description:
        "Track employee attendance with real-time updates and automated absence marking.",
      details: [
        "Real-time attendance tracking",
        "Automated absence marking",
        "Monthly attendance reports",
        "Integration with leave management",
      ],
    },
    {
      id: "leave",
      title: "Leave Management",
      icon: Users,
      component: LeaveManagement,
      description:
        "Manage multiple leave types, approval workflows, and leave balances.",
      details: [
        "Multiple leave type support",
        "Approval workflow system",
        "Leave balance tracking",
        "Holiday calendar integration",
      ],
    },
    {
      id: "payroll",
      title: "Payroll System",
      icon: DollarSign,
      component: PayrollSystem,
      description:
        "Automate payroll processing, tax calculations, and deductions.",
      details: [
        "Automated salary calculations",
        "Tax and EPF deductions",
        "Leave deduction integration",
        "Payroll report generation",
      ],
    },
    {
      id: "salary",
      title: "Salary Slip",
      icon: FileText,
      component: SalarySlip,
      description:
        "Generate secure digital salary slips with detailed breakdowns.",
      details: [
        "Digital slip generation",
        "Detailed payment breakdown",
        "Historical record access",
        "Secure document delivery",
      ],
    },
  ]

  const handleViewClick = (feature) => {
    setSelectedFeature(feature)
  }

  return (
    <section className="project-showcase py-5">
      <div className="container">
        <h2 className="display-2 text-center text-white mb-3 mt-3">Employee Management System</h2>

        <div className="project-intro mb-5">
          <p className="text-secondary text-center mb-4">
            A comprehensive employee management system developed using ASP.NET Core with Razor Pages. This full-stack
            application streamlines HR processes by integrating payroll, attendance, and leave management functionalities.
          </p>
          <div className="tech-stack">
            <span className="tech-tag">ASP.NET</span>
            <span className="tech-tag">C#</span>
            <span className="tech-tag">Razor Pages</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">MVC</span>
          </div>
        </div>

        <h3 className="text-white text-center mb-4">Key Features</h3>

        <div className="features-grid">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`feature-card ${selectedFeature?.id === feature.id ? "active" : ""}`}
              onClick={() => handleViewClick(feature)}
            >
              <div className="feature-icon">
                <feature.icon size={24} />
              </div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
              <ul className="feature-details">
                {feature.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {selectedFeature && (
          <div className="selected-feature">
            <h3 className="text-white text-center mt-4">{selectedFeature.title}</h3>
            <p className="text-secondary text-center">{selectedFeature.description}</p>
            <div className="feature-component">{React.createElement(selectedFeature.component)}</div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectShowcase
