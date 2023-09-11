import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer"
import { Link } from "react-router-dom";
import "../stylesheets/pages/login.css";
import Button from "../components/Button";

const Login = () => {

    useEffect(() => {
        // Llevar la página a la parte superior cuando se carga el componente
        window.scrollTo(0, 0);
    }, []);
    const form = {
        email: "",
        password: "",
        functionHandle:"handleLogin"
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
    const styles = {
        hero__link: "detalles-count__compra",
        texto: "Ingresar",
        url: ''
    };
    const handleLogin = () =>{
        alert("Te logueaste.");
    }
    return (
        <>
            <Navbar />
            <section className="input container">
                <h1 className="input__title">INGRESAR A MI CUENTA</h1>
                <form className="input__form" action="" onSubmit={handleSubmit}>
                    <div className="input__grid">
                        <div className="input__flex">
                            <label className="input__label" htmlFor="email">Email: </label>
                            <label className="input__label" htmlFor="password">Contraseña: </label>
                        </div>
                        <div className="input__flex">
                            <input className="input__input" type="email" name="email" id="email" value={value.email} placeholder=" jotaroStar@correo.com" onChange={handleOnChange} />
                            <input className="input__input" type="password" name="password" id="password" value={value.password} placeholder="  &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;" onChange={handleOnChange} />
                        </div>
                    </div>
                    <div className="input__register">
                        <Button {...styles} functionHandle={handleLogin}/>
                            <label className="input__terms" htmlFor="remember"><input className="input__inputTerm" type="checkbox" name="remember" id="remember" />Recordarme</label>    
                    </div>

                </form>
                <Link className="input__remember" to="/recuperarCuenta">Olvidé mi contraseña</Link>
            </section>
            <Footer />
        </>
    )
}
export default Login