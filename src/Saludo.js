export function Saludo() {
  const nombre = "Juan";
  const estatura = 178;
  const activo = true;

  const usuario = {
    nombreUsuario: "Juan.e",
    correo: "juan@mail.com",
  };

  return (
    <>
      <h1>Hola, {nombre} 👋</h1>
      <p>{estatura > 160 ? "Eres alto" : "Eres bajo"}</p>
      <p>{JSON.stringify(usuario)}</p>
      <p>{usuario.correo}</p>
      <p>{activo.toString()}</p>
      <h2>Componente de prueba</h2>
      <p>Texto de prueba</p>
    </>
  );
}

export function Usuario() {
  return <h1>Modulo usuario</h1>;
}
