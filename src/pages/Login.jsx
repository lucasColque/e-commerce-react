import React, { useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer"
import { Link } from "react-router-dom";


const Login = () => {
    const form = {
        email: "",
        password: ""
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
        <>
            <Navbar />
            <div className="container">

                <section>
                    <h1>INGRESAR A MI CUENTA</h1>
                    <p>Completa el formulario para ser parte del mundo de los Funkos</p>
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" value={value.email} placeholder=" jotaroStar@correo.com" onChange={handleOnChange} />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña: </label>
                            <input type="password" name="password" id="password" value={value.password} placeholder="  &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;" onChange={handleOnChange} />
                        </div>
                        <div>
                            <label htmlFor="remember">Recordarme</label>
                            <input type="checkbox" name="remember" id="remember" />
                        </div>
                        <input type="submit" value="Ingresar" />
                    </form>
                    <Link to="/recuperarCuenta">Olvidé mi contraseña</Link>
                </section>

            </div>
            <Footer />
        </>
    )
}
export default Login