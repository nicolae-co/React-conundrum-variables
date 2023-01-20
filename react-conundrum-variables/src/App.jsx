import './App.css'

function App() {

  const thingsArray = ["Thing 1", "Thing 2"]
  const mapThings = thingsArray.map(item => <p key={item}>{item}</p>)

  function addThing() {
    thingsArray.push(`Thing ${thingsArray.length + 1}`)
    console.log(thingsArray)
  }

  return (
    <div className="App">
      <button onClick={addThing}>Add Item</button>
      {mapThings}
    </div>
  )
}

export default App
