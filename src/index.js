import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./css/styles.css";

function App() {
  const msg = "Olá Mundo";

  const [texto, setTexto] = useState(msg);
  const [lista, setLista] = useState([texto]);
  const [editMode, setEditMode] = useState(-1);
  // const [input, setInput] = useState(texto)
  const remove = j => {
    console.log(j);
    let newLista = lista.filter((t, i) => j !== i);
    setLista(newLista);
    setEditMode(-1);
    setTexto("");
  };

  const editar = id => {
    console.log(lista.find((t, i) => id === i));
    setTexto(lista.find((t, i) => id === i));
    console.log({ id });
    setEditMode(Number(id));
    console.log({ editMode });
  };

  const add = () => {
    console.log({ editMode });
    if (editMode >= 0) {
      console.log("Editando");
      let newlista = lista.map((t, i) => {
        console.log(t);
        t = editMode === i ? texto : t;
        return t;
      });
      setLista(newlista);
    } else {
      console.log("Cadastrando");
      setLista([...lista, texto]);
      console.log([...lista, texto]);
      console.log(lista.length);
    }

    setEditMode(-1);
    setTexto("");
  };

  return (
    <div className="App">
      <input
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
      />
      <button onClick={() => (texto ? add() : false)}>
        {editMode === -1 ? "Adicionar" : "Editar"}
      </button>
      <button
        onClick={() => {
          setTexto("");
          setLista([]);
          setEditMode(-1);
        }}
      >
        Limpa
      </button>
      {lista.length > 0 ? (
        lista.map((t, i) => (
          <h1
            key={i}
            style={{
              position: "relative",
              color: editMode === i ? "gray" : "black"
            }}
          >
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
              &#x2718;
              {/* &#x2717; */}
              {/* &#128465; */}
              {/* &#215; */}
            </span>
            <span
              title="Editar"
              onClick={() => editar(i)}
              style={{
                fontSize: "16px",
                color: "grey",
                cursor: "pointer",
                position: "absolute",
                top: "12px"
              }}
            >
              &#x270e;
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
