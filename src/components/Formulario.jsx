import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Formulario() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {

        console.log(data);

        alert("Formulario enviado");

        reset();

        navigate("/home");
    };

    return (
        <div>

            <h2>Registro</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Nombre */}
                <input
                    type="text"
                    placeholder="Nombre"
                    {...register("nombre", {
                        required: true
                    })}
                />

                {errors.nombre && (
                    <p>El nombre es obligatorio</p>
                )}

                <br />

                {/* Correo */}
                <input
                    type="email"
                    placeholder="Correo"
                    {...register("correo", {
                        required: true,
                        pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/
                    })}
                />

                {errors.correo && (
                    <p>Correo inválido</p>
                )}

                <br />

                {/* Contraseña */}
                <input
                    type="password"
                    placeholder="Contraseña"
                    {...register("password", {
                        required: true,
                        minLength: 6
                    })}
                />

                {errors.password && (
                    <p>Mínimo 6 caracteres</p>
                )}

                <br />

                <button type="submit">
                    Enviar
                </button>

            </form>

        </div>
    );
}

export default Formulario;