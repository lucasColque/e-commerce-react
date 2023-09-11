import React, { useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer"
import "../stylesheets/pages/register.css"
import Button from "../components/Button";
import { Link } from "react-router-dom";

const styles = {
    hero__link: "detalles-count__compra",
    texto: "Registrar",
    url: '',
};

const Register = () => {
    const form = {
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        passwordCheck: "",
        aceptoTerminos: false
    };
    const [value, setValue] = useState(form);

    const [register, setRegister] = useState(false);


    const [verificar, setVerificar] = useState(false);

    const [verificarCheck, setVerificarCheck] = useState(false);


    
    const handleRegister = () => {
        let bandera = true;
        for (const propiedad in value) {
            if (value[propiedad] === "") {
                bandera = false;
                break;
            }
        }
        if (!value.aceptoTerminos) {
            bandera = false;
            setVerificarCheck(true);
        }else{
            setVerificarCheck(false);
        }
        if (value.password !== value.passwordCheck){
            bandera = false;
            setVerificar(true);
        }else{
            setVerificar(false);
        }
            

        setRegister(true);
        if (bandera) alert(`Registro exitoso!\n Sitio en construcción`);
    };



    const handleOnChange = (e) => {
        const name = e.target.name;
        const valueInput = e.target.value;
        setValue({ ...value, [name]: valueInput });

        const { type, checked } = e.target;


        if (type === 'checkbox'){
            setValue({ ...value, [name]: checked });
            }


    }

    const handleSubmit = (e) => {
        e.preventDefault();

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
                            {value.nombre == "" && register ? <span className="form__error" >Campo obligatorio</span> : null}


                            <input className="form__input" type="text" name="apellido" id="apellido" value={value.apellido} placeholder=" Joestar" onChange={handleOnChange} />
                            {value.apellido == "" && register ? <span className="form__error" >Campo obligatorio</span> : null}


                            <input className="form__input" type="email" name="email" id="email" value={value.email} placeholder=" jotaroStar@correo.com" onChange={handleOnChange} />
                            {value.email == "" && register ? <span className="form__error" >Campo obligatorio</span> : null}


                            <input className="form__input" type="password" name="password" id="password" value={value.password} placeholder="  &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;" onChange={handleOnChange} />
                            {value.password == "" && register ? <span className="form__error" >Campo obligatorio</span> : null}


                            <input className="form__input" type="password" name="passwordCheck" id="passwordCheck" value={value.passwordCheck} placeholder="  &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;" onChange={handleOnChange} />
                            {value.passwordCheck == "" && register ? <span className="form__error" >Campo obligatorio</span> : null}
                            {verificar?<span className="form__error" >Las contraseñas deben coincidir</span> : null}
                        </div>
                    </div>
                    <div className="form__register">
                        <Button {...styles} functionHandle={handleRegister} />

                        <label className="form__terms" htmlFor="terms"><input onChange={handleOnChange} checked={value.aceptoTerminos} className="form__terms form__inputTerm" type="checkbox" name="aceptoTerminos" id="terms" />Acepto <Link className="form__terms form__span">Términos y Condiciones</Link> </label>
                        {verificarCheck?  <span className="form__error" >Campo obligatorio</span>:null}
                    </div>


                </form>
            </section>
            <Footer />
        </>
    )
}
export default Register