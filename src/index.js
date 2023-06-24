import React from "react";
import ReactDOM from "react-dom/client";
import { Saludo } from "./Saludo";
import { Usuario } from "./Usuario";
import { Boton } from "./Boton";
import { Post } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const usuarios = [
  {
    id: 1,
    nombre: "Ryan",
    img: "https://robohash.org/usuario1",
  },
  {
    id: 2,
    nombre: "Joe",
    img: "https://robohash.org/usuario2",
  },
];

root.render(
  <>
    <Post />

    {usuarios.map((usuario, i) => {
      return (
        <div key={i}>
          <h1>{usuario.nombre}</h1>
          <img src={usuario.img} />
        </div>
      );
    })}
  </>
);
