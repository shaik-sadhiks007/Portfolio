import React from "react"
import { Table } from "./Table"
import "./LeaveManagement.css"

export function LeaveManagement() {
  const leaveApplications = [
    {
      fromDate: "02-01-2025",
      toDate: "08-01-2025",
      reason: "new year",
      numberOfDays: 5,
      dateRequested: "23-12-2024 11.20.55 AM",
      status: "Rejected",
    },
    {
      fromDate: "19-12-2024",
      toDate: "19-12-2024",
      reason: "sick leave",
      numberOfDays: 1,
      dateRequested: "18-12-2024 12.21.35 PM",
      status: "Approved",
    },
    // Add more leave applications as needed
  ]

  return (
    <div className="leave-container">
      <div className="leave-header">
        <h1>Leave Applications</h1>
        <button className="btn-apply-leave">Apply Leave</button>
      </div>

      <div className="table-controls">
        <div className="entries-control">
          Show
          <select>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          entries
        </div>
        <div className="search-control">
          Search: <input type="text" />
        </div>
      </div>

      <Table>
        <thead>
          <tr>
            <th>From Date</th>
            <th>To Date</th>
            <th>Reason</th>
            <th>Number of Days</th>
            <th>Date Requested</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leaveApplications.map((leave, index) => (
            <tr key={index}>
              <td>{leave.fromDate}</td>
              <td>{leave.toDate}</td>
              <td>{leave.reason}</td>
              <td>{leave.numberOfDays}</td>
              <td>{leave.dateRequested}</td>
              <td>
                <span className={`status-badge ${leave.status.toLowerCase()}`}>{leave.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

