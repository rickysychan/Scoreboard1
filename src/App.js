import React from "react";
import "./App.css";

const initalData = {
  players: [
    {
      name: "Jim Hoskins",
      score: 31,
      created: "11/8/2016",
      updated: "11/9/2016"
    },
    {
      name: "Andrew Chalkley",
      score: 20,
      created: "11/9/2016",
      updated: "11/10/2016"
    },
    {
      name: "Alena Holligan",
      score: 50,
      created: "11/11/2016",
      updated: "11/12/2016"
    }
  ]
};

function App() {
  return <div className="scoreboard">Scoreboard</div>;
}

export default App;
