import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Saludo() {
    const nombre = "Juan"

    return <div>
                <h1>Hola, {nombre}</h1>
                <h2>Componente de prueba</h2>
                <p>Texto de prueba</p>
            </div>
}

root.render(
    <div>
        <Saludo />
    </div>
)