import React from "react"
import Header from "./components/Header"
import Dislike from "./components/actions/Dislike"
import Like from "./components/actions/Like"

const App = () => {
  return (
    <div className="app">
        <Header/>
        <Dislike/>
        <Like/>
    </div>
)
}
export default App;
