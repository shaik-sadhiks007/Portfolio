import "./Attendance.css";

export function AttendanceCalendar() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = 28;

  return (
    <div className="d-flex justify-content-center">
      <div className="calendar-container container p-3" style={{ maxWidth: "500px" }}>
        <h1 className="text-center">Calendar</h1>

        <div className="calendar-header d-flex justify-content-between align-items-center">
          <h2>January 2025</h2>
          <div className="calendar-nav">
            <button className="nav-btn">&lt;</button>
            <button className="nav-btn">&gt;</button>
          </div>
        </div>

        <div className="calendar">
          <div className="calendar-days d-flex justify-content-between">
            {days.map((day) => (
              <div key={day} className="day-header text-center flex-fill">
                {day}
              </div>
            ))}
          </div>

          <div className="calendar-dates d-grid">
            {Array.from({ length: 35 }, (_, i) => {
              const date = i - 3;
              if (date < 1 || date > 31) return <div key={i} className="date empty"></div>;
              return (
                <div key={i} className={`date text-center ${date === currentDate ? "current" : ""}`}>
                  {date}
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-3">
          <button className="btn btn-primary">Add Attendance</button>
        </div>
      </div>
    </div>
  );
}
