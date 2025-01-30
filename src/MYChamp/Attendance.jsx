import React from "react"
import "./Attendance.css"

export function AttendanceCalendar() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const currentDate = 28

  return (
    <div className="calendar-container w-50 h-25">
      <h1>Calendar</h1>

      <div className="calendar-header">
        <h2>January 2025</h2>
        <div className="calendar-nav">
          <button className="nav-btn">&lt;</button>
          <button className="nav-btn">&gt;</button>
        </div>
      </div>

      <div className="calendar">
        <div className="calendar-days">
          {days.map((day) => (
            <div key={day} className="day-header">
              {day}
            </div>
          ))}
        </div>

        <div className="calendar-dates">
          {Array.from({ length: 35 }, (_, i) => {
            const date = i - 3 // Adjust to start from correct day
            if (date < 1 || date > 31) return <div key={i} className="date empty"></div>
            return (
              <div key={i} className={`date ${date === currentDate ? "current" : ""}`}>
                {date}
              </div>
            )
          })}
        </div>
      </div>

      <button className="btn-add-attendance">Add Attendance</button>
    </div>
  )
}

