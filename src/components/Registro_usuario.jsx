import { useState } from "react";

function Registro_usuario() {

    // Estado para almacenar el nombre
    const [nombre, setNombre] = useState("");

    return (
        <div>
            <h2>Ingrese su nombre</h2>

            <input
                type="text"
                placeholder="Escriba su nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <p>Nombre ingresado: {nombre}</p>
        </div>
    );
}

export default Registro_usuario;