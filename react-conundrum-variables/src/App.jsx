import { useState } from 'react'
import './App.css'

function App() {

  const [thingArray, setThingArray] = useState(["Thing 1", "Thing 2"])

  

  function addThing() {
    setThingArray(prevState => [...prevState, `Thing ${prevState.length + 1}`])
  }

  const thingsElemets = thingArray.map(item => <p>{item}</p>)

  return (
    <div className="App">
      <button onClick={addThing}>Add Item</button>
      {thingsElemets}
    </div>
  )
}

export default App
