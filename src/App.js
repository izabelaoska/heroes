import { useEffect, useState } from "react"
import { HeroCard } from "./components/HeroCard"

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-20 w-full justify-items-center">
          {heroes.map((hero) => {
            return <HeroCard key={hero.id} hero={hero} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App
