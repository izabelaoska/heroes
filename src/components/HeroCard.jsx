import React from "react"
import { Alignment } from "../components/Alignment"
import { PowerStats } from "../components/PowerStats"

export const HeroCard = ({ hero }) => {
  return (
    <div
      className="card w-96 bg-base-100 shadow-xl min-h-[450px] h-auto hover:-translate-y-2 transition-transform duration-300"
      key={hero.id}
    >
      <img
        src={hero.images.lg}
        alt="Shoes"
        className="h-[280px] w-full object-cover"
      />
      <div className="card-body p-6">
        <h2 className="card-title">{hero.name}</h2>
        <PowerStats stats={hero.powerstats} />
        <div className="mt-2 space-y-1">
          <div className="flex justify-between">
            <div>
              <strong>Race:</strong>{" "}
              {hero?.appearance?.race || "unknown"}
            </div>
            <Alignment value={hero?.biography?.alignment} />
          </div>
          <div>
            <strong>Work:</strong>{" "}
            {hero?.work?.occupation === "-"
              ? "unknown"
              : hero?.work?.occupation}
          </div>
        </div>
      </div>
    </div>
  )
}
