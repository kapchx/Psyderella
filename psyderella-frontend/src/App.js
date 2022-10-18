import React from "react"
import Header from "./components/Header"
import Dislike from "./components/actions/Dislike"
import Like from "./components/actions/Like"
import Rewind from "./components/actions/Rewind"

const App = () => {
  return (
    <div className="app">
      <Header />
      <Dislike />
      <Like />
      <Rewind />
    </div>
  )
}
export default App;
