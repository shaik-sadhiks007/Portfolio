import React, { useState } from "react"
import { Calendar, Users, DollarSign, FileText } from "lucide-react"
import "./ProjectShowcase.css"
import { AttendanceCalendar } from "./Attendance"
import { LeaveManagement } from "./LeaveManagement"
import { PayrollSystem } from "./PayrollSystem"
import { SalarySlip } from "./SalarySlip"

function ProjectShowcase() {
  const [activeFeature, setActiveFeature] = useState(null)

  const features = [
    {
      id: "attendance",
      title: "Attendance Calendar",
      icon: Calendar,
      description:
        "Interactive calendar system for tracking employee attendance with automated absence marking and real-time updates. Features include attendance tracking, leave integration, and automated reporting.",
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
      description:
        "Comprehensive leave management system with support for multiple leave types and approval workflows. Includes features for leave balance tracking and integration with payroll.",
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
      description:
        "Automated payroll processing system with tax calculations and deduction management. Streamlines the entire payroll process with accurate calculations and reporting.",
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
      description:
        "Digital salary slip generation with detailed breakdown of earnings and deductions. Provides secure access to current and historical salary information.",
      details: [
        "Digital slip generation",
        "Detailed payment breakdown",
        "Historical record access",
        "Secure document delivery",
      ],
    },
  ]

  return (
    <section className="project-showcase py-5">
      <div className="container">
        <h2 className="display-2 text-center text-white mb-3">Employee Management System</h2>

        <div className="project-intro mb-5">
          <p className="text-secondary text-center mb-4">
            A comprehensive employee management system developed using ASP.NET Core with Razor Pages. This full-stack
            application streamlines HR processes by integrating payroll, attendance, and leave management
            functionalities.
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
              className={`feature-card ${activeFeature === feature.id ? "active" : ""}`}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
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
        <AttendanceCalendar />
        <LeaveManagement />
        <PayrollSystem />
        <SalarySlip />
      </div>
    </section>
  )
}

export default ProjectShowcase

