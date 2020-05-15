import React from "react";
import "./Proyect.scss";

class Proyect extends React.Component {
    render() {
        return (
            <div className="proyect-container">
                <img className="proyect-container__img" src={this.props.image} alt=""/>
                <div className="proyect-container__info">
                    <h1 className="proyect-container__info--title">{this.props.title}</h1>
                    <p className="proyect-container__info--description">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default Proyect;