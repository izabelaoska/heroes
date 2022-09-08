import { useEffect, useState } from "react"
import { Alignment } from "./components/Alignment"
import { PowerStats } from "./components/PowerStats"

const url =
  "https://akabab.github.io/superhero-api/api/all.json"

function App() {
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    fetchHeroes()
  }, [])

  const fetchHeroes = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const slicedData = data.slice(0, 15)
        setHeroes(slicedData)
      })
  }

  return (
    <div className="bg-gray-200 min-h-screen h-auto py-20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full justify-items-center">
          {heroes.map((hero) => {
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
                  <h2 className="card-title">
                    {hero.name}
                  </h2>
                  <PowerStats stats={hero.powerstats} />
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between">
                      <div>
                        <strong>Race:</strong>{" "}
                        {hero?.appearance?.race ||
                          "unknown"}
                      </div>
                      <Alignment
                        value={hero?.biography?.alignment}
                      />
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
          })}
        </div>
      </div>
    </div>
  )
}

export default App
