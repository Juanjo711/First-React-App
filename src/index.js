import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { useEffect } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Contador() {
	const [contador, setContador] = useState(0);
	const [mensaje, setMensaje] = useState("");

	useEffect(() => {
		console.log("useEffect");
	}, [mensaje]);

	return (
		<div>
			<p>{contador}</p>
			<button onClick={() => setContador(contador + 1)}>Sumar</button>
			<hr />
			<input
				type="text"
				onChange={(e) => {
					setMensaje(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					alert(mensaje);
				}}
			>
				Guardar
			</button>
		</div>
	);
}

root.render(
	<>
		<Contador />
	</>
);
