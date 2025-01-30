import React from "react"
import "./Table.css"

export function Table({ children }) {
  return (
    <div className="table-responsive">
      <table className="table">{children}</table>
    </div>
  )
}

