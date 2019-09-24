import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./css/styles.css";

function App() {
  const msg = "Olá Mundo";

  const [texto, setTexto] = useState(msg);
  const [lista, setLista] = useState([texto]);
  // const [input, setInput] = useState(texto);
  const remove = id => {
    console.log(id);
    let newLista = lista.filter((t, i) => id !== i);
    setLista(newLista);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
      />
      <button
        onClick={() => {
          // setTexto(texto);
          console.log(texto);
          setLista([...lista, texto]);
          console.log([...lista, texto]);
          console.log(lista.length);
        }}
      >
        Salvar
      </button>
      <button
        onClick={() => {
          setTexto("");
          setLista([]);
        }}
      >
        Limpa
      </button>
      {lista.length > 0 ? (
        lista.map((t, i) => (
          <h1 key={i} style={{ position: "relative" }}>
            {t}
            <span
              title="Excluir"
              onClick={() => remove(i)}
              style={{
                fontSize: "14px",
                color: "grey",
                cursor: "pointer",
                position: "absolute",
                top: "-5px"
              }}
            >
              &#128465;
              {/* &#215; */}
            </span>
          </h1>
        ))
      ) : (
        <p>Vazio</p>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
