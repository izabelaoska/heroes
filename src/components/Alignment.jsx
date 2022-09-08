import React from "react"

export const Alignment = ({ value }) => {
  if (value === "good")
    return (
      <div className="badge badge-success">{value}</div>
    )
  if (value === "bad")
    return <div className="badge badge-error">{value}</div>
  return <div className="badge ">unknown</div>
}
