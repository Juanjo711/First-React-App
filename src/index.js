import React from "react";
import ReactDOM from "react-dom/client";
import { Saludo } from "./Saludo";
import { Usuario } from "./Usuario";
import { Boton } from "./Boton";
import { Post } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Post />
  </>
);
