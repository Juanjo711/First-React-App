import React from "react";
import ReactDOM from "react-dom/client";
import { Saludo } from "./Saludo";
import { Usuario } from "./Usuario";
import { Boton } from "./Boton";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Usuario
      nombre="Jhon"
      apellido="Doe"
      empleo="Desarrollador de software"
      edad="33"
      activo={true}
      saludar={function () {
        alert("Hola");
      }}
    />

    <Boton />

    <input
      onChange={(e) => {
        console.log(e.target.value);
      }}
    />
  </>
);
