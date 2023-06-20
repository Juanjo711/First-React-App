import "./usuario.css";

export function Usuario({ nombre, apellido, empleo, edad, activo, saludar }) {
  return (
    <div className="usuario">
      <h1>
        {nombre} {apellido}
      </h1>
      <p>Trabajo: {empleo}</p>
      <p>Edad: {edad}</p>
      <p className={activo ? "activo" : "inactivo"}>
        {activo ? "Activo" : "Inactivo"}
      </p>
    </div>
  );
}
