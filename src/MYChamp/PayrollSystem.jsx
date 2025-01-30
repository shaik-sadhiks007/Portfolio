import React from "react"
import { Table } from "./Table"
import "./PayrollSystem.css"

export function PayrollSystem() {
  const employees = [
    {
      id: "121",
      name: "Akanksha",
      monthlySalary: 100000,
      epf: 12000.0,
      professionTax: 200,
      incomeTax: 10000.0,
      leaveDeductions: 0,
      netSalary: 77800,
    },
    {
      id: "111",
      name: "kusuma",
      monthlySalary: 50000,
      epf: 6000.0,
      professionTax: 200,
      incomeTax: 0,
      leaveDeductions: 0,
      netSalary: 43800,
    },
    // Add more employee data as needed
  ]

  return (
    <div className="payroll-container">
      <h1>Employee PaySlip Details</h1>
      <Table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Monthly Salary</th>
            <th>EPF</th>
            <th>Profession Tax</th>
            <th>Income Tax</th>
            <th>Leave Deductions</th>
            <th>Net Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.monthlySalary}</td>
              <td>{employee.epf.toFixed(2)}</td>
              <td>{employee.professionTax}</td>
              <td>{employee.incomeTax.toFixed(2)}</td>
              <td>{employee.leaveDeductions}</td>
              <td>{employee.netSalary}</td>
              <td>
                <button className="btn-edit">Edit</button>
                <button className="btn-dispatch">Dispatch</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

