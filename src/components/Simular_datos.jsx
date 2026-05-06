import { useState, useEffect } from "react";

function CargaDatos() {

    const [mensaje, setMensaje] = useState("Cargando...");

    useEffect(() => {

        console.log("Componente cargado");

        setTimeout(() => {
            setMensaje("Datos cargados correctamente");
        }, 2000);

    }, []);

    return (
        <div>
            <h2>useEffect</h2>
            <p>{mensaje}</p>
        </div>
    );
}

export default CargaDatos;