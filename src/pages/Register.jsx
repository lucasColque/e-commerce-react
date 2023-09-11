import React, { useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer"
import "../stylesheets/pages/register.css"
import Button from "../components/Button";

const Register = () => {
    const styles = {
        hero__link: "detalles-count__compra",
        texto: "Registrar",
        url: '',
    };
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
    const handleRegister = () =>{
        alert("Te registraste");
    }
    return (
        <>
            <Navbar />
            <section className="form container">
                <h1 className="form__title">CREA TU CUENTA</h1>
                <p className="form__text">Completa el formulario para ser parte del mundo de los Funkos</p>
                <form className="form__form" action="" onSubmit={handleSubmit}>
                    <div className="form__grid">
                        <div className="form__flex">
                            <label className="form__label" htmlFor="nombre">Nombre: </label>
                            <label className="form__label" htmlFor="apellido">Apellido: </label>
                            <label className="form__label" htmlFor="email">Email: </label>
                            <label className="form__label" htmlFor="password">Contraseña: </label>
                            <label className="form__label" htmlFor="passwordCheck">Repita contraseña: </label>


                        </div>
                        <div className="form__flex">
                            <input className="form__input" type="text" name="nombre" id="nombre" value={value.nombre} placeholder=" Jotaro" onChange={handleOnChange} />
                            <span className="form__error">Campo obligatorio</span>
                            <input className="form__input" type="text" name="apellido" id="apellido" value={value.apellido} placeholder=" Joestar" onChange={handleOnChange} />
                            <span className="form__error">Campo obligatorio</span>
                            <input className="form__input" type="email" name="email" id="email" value={value.email} placeholder=" jotaroStar@correo.com" onChange={handleOnChange} />
                            <span className="form__error">Campo obligatorio</span>
                            <input className="form__input" type="password" name="password" id="password" value={value.password} placeholder="  &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;" onChange={handleOnChange} />
                            <span className="form__error">Campo obligatorio</span>
                            <input className="form__input" type="password" name="passwordCheck" id="passwordCheck" value={value.passwordCheck} placeholder="  &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;" onChange={handleOnChange} />
                            <span className="form__error">Campo obligatorio</span>
                        </div>
                    </div>
                    <div className="form__register">
                        <Button {...styles} functionHandle={handleRegister} />
                        
                        <label className="form__terms" htmlFor="terms"><input className="form__terms form__inputTerm" type="checkbox" name="terms" id="terms" />Acepto <span className="form__terms form__span">Términos y Condiciones</span> </label>
                        <span className="form__error">Campo obligatorio</span>
                    </div>


                </form>
            </section>
            <Footer />
        </>
    )
}
export default Register