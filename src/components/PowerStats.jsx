import React from "react"

export const PowerStats = ({ stats }) => {
  const keys = Object.keys(stats)
  const values = Object.values(stats)

  return (
    <div className="flex flex-wrap gap-2">
      {keys.map((key, i) => {
        return (
          <div
            key={key}
            className="bg-gray-300 text-gray-900 badge border-0 font-light"
          >
            {key}: {values[i]}
          </div>
        )
      })}
    </div>
  )
}
