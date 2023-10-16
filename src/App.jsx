import { useLoaderData } from "react-router-dom"
import CoffeeDetails from "./components/CoffeeDetails";

function App() {

  const coffees = useLoaderData();
  console.log(coffees)
  

  return (
    <div className="App">
      <h1>Vite + React. {coffees.length}</h1>
      <div className="grid grid-cols-2 gap-3">
      {
        coffees.map(coffee => <CoffeeDetails key={coffee._id} coffee={coffee}></CoffeeDetails>)
      }
      </div>
    </div>
  )
}

export default App
