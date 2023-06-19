import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Saludo() {
  const nombre = "Juan";
  const estatura = 178;

  return (
    <div>
      <h1>Hola, {nombre} 👋</h1>
      <p>{estatura > 160 ? "Eres alto" : "Eres bajo"}</p>
      <h2>Componente de prueba</h2>
      <p>Texto de prueba</p>
    </div>
  );
}

root.render(
  <div>
    <Saludo />
  </div>
);
