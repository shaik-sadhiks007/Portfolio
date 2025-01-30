import React from "react"
import "./SalarySlip.css"

export function SalarySlip() {
  const employeeData = {
    name: "Akanksha",
    month: "December 2024",
    bankName: "XYZ Bank",
    accountNo: "1234567890",
    earnings: {
      basicSalary: 100000,
    },
    deductions: {
      epf: 12000.0,
      professionalTax: 200,
      incomeTax: 10000.0,
      leaveDeductions: 0,
    },
  }

  const totalDeductions = Object.values(employeeData.deductions).reduce((a, b) => a + b, 0)
  const netSalary = employeeData.earnings.basicSalary - totalDeductions

  return (
    <div className="salary-slip">
      <h1>Salary Slip</h1>
      <h2>
        {employeeData.name}'s Salary Slip for {employeeData.month}
      </h2>

      <div className="bank-details">
        <div className="detail-row">
          <span>Bank Name:</span>
          <span>{employeeData.bankName}</span>
        </div>
        <div className="detail-row">
          <span>A/C No:</span>
          <span>{employeeData.accountNo}</span>
        </div>
      </div>

      <h3>Salary Breakdown</h3>

      <div className="salary-breakdown">
        <div className="earnings">
          <h4>Earnings</h4>
          <div className="detail-row">
            <span>Basic Salary:</span>
            <span>{employeeData.earnings.basicSalary}</span>
          </div>
        </div>

        <div className="deductions">
          <h4>Deductions</h4>
          <div className="detail-row">
            <span>EPF:</span>
            <span>{employeeData.deductions.epf.toFixed(2)}</span>
          </div>
          <div className="detail-row">
            <span>Professional Tax:</span>
            <span>{employeeData.deductions.professionalTax}</span>
          </div>
          <div className="detail-row">
            <span>Income Tax:</span>
            <span>{employeeData.deductions.incomeTax.toFixed(2)}</span>
          </div>
          <div className="detail-row">
            <span>Leave Deductions:</span>
            <span>{employeeData.deductions.leaveDeductions}</span>
          </div>
        </div>
      </div>

      <div className="summary">
        <div className="detail-row total">
          <span>Total Deductions:</span>
          <span>{totalDeductions.toFixed(2)}</span>
        </div>
        <div className="detail-row net">
          <span>Net Salary:</span>
          <span>{netSalary.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

