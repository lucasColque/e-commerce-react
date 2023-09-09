import React, { useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer"


const Register = () => {
    const form = {
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        passwordCheck: ""
    };
    const [value, setValue] = useState(form);

    const handleOnChange = (e) => {
        const name = e.target.name;
        const valueInput = e.target.value;
        setValue({ ...value, [name]: valueInput });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="container">
            <Navbar />
            <section>
                <h1>CREA TU CUENTA</h1>
                <p>Completa el formulario para ser parte del mundo de los Funkos</p>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nombre">Nombre: </label>
                        <input type="text" name="nombre" id="nombre" value={value.nombre} placeholder=" Jotaro" onChange={handleOnChange} />

                    </div>
                    <div>
                        <label htmlFor="apellido">Apellido: </label>
                        <input type="text" name="apellido" id="apellido" value={value.apellido} placeholder=" Joestar" onChange={handleOnChange} />
                    </div>

                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" value={value.email} placeholder=" jotaroStar@correo.com" onChange={handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña: </label>
                        <input type="password" name="password" id="password" value={value.password} placeholder="  &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;" onChange={handleOnChange} />

                    </div>
                    <div>
                        <label htmlFor="passwordCheck">Repita contraseña: </label>
                        <input type="password" name="passwordCheck" id="passwordCheck" value={value.passwordCheck} placeholder="  &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;" onChange={handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="terms">Acepto <span>Términos y Condiciones</span> </label>
                        <input type="checkbox" name="terms" id="terms" />
                    </div>

                    <input type="submit" value="Registrar" />
                </form>
            </section>
            <Footer />
        </div>
    )
}
export default Register