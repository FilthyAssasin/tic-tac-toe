import React from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import GameBoard from "./components/GameBoard";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GameBoard />
      </div>
    );
  }
}

export default App;
