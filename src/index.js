import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./css/styles.css";

function App() {
  const msg = "Olá Mundo";

  const [texto, setTexto] = useState(msg);

  return (
    <div className="App">
      <h1>{texto}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
