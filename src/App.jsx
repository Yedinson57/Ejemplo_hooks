import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registro_usuario from "./components/Registro_usuario";
import Simular_datos from "./components/Simular_datos"
import Boton_redirigir from "./components/Boton_redirigir"
import Formulario from "./components/Formulario";

function App() {

  return (

    <BrowserRouter>

      <Registro_usuario />
      <Simular_datos />

      <Routes>

        <Route
          path="/"
          element={<Formulario />}
        />

        <Route
          path="/boton_redirigir"
          element={<Boton_redirigir />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;