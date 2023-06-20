import React from "react";
import ReactDOM from "react-dom/client";
import { Saludo } from "./Saludo";
import { Usuario } from "./Usuario";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Saludo /> */}
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

    <Usuario
      nombre="Ryan"
      apellido="Ray"
      empleo="Dev tester"
      edad="23"
      activo={false}
    />
  </>
);
