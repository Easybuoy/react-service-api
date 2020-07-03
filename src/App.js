import React, { useEffect } from "react";

import { getUsers } from "./services/auth";
import "./App.css";

function App() {
  useEffect(() => {
    getUsers().then((res) => console.log(res));
  });

  return <div className="App"></div>;
}

export default App;
