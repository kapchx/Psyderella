import React, { useState } from "react"
import Header from "./components/Header"
import Person from "./components/Person"
import data from "./data.json"
import './App.css';

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <div className="app">
      <Header />
      <Person
        key={people[1].id}
        person={people[1]}
      />
    </div>
  )
}
export default App;
