import React from "react"
import Header from "./components/Header"
import Dislike from "./components/actions/Dislike"
import Like from "./components/actions/Like"
import Rewind from "./components/actions/Rewind"
import Superlike from "./components/actions/Superlike"

const App = () => {
  return (
    <div className="app">
      <Header />
      <Dislike />
      <Like />
      <Rewind />
      <Superlike/>
    </div>
  )
}
export default App;
