import React from "react";
import "./SocioForm.scss";
import Input from "../Input/Input";

const handleClick = (event) => {
    console.log("Button was clicked");
};

const SocioForm = (props) => {

    return (
        <div className="form-container">
            <h1 className="form-container__title">Convertirse en socio!</h1>
            <form className="form-container_form">
                <Input type="text" name="name" placeholder="Nombre"/>
                <Input type="text" name="lastName" placeholder="Apellido"/>
                <Input type="email" name="email" placeholder="Email"/>
                <button className="form-container_form--btn">Unirme!</button>
            </form>
        </div>
    );
}

export default SocioForm;