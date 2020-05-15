import React from "react";
import { Link } from "react-router-dom";
import "./SocialIcons.scss";
import "../../assets/font/flaticon.css";

function SocialIcons() {
    return (
        <section className="icons-container">
            <div className="icons-container__section">
                <Link to="/" className="icons-container__section--link"><span className="flaticon-001-facebook"></span></Link>
                <Link to="/" className="icons-container__section--link"><span className="flaticon-002-twitter"></span></Link>
                <Link to="/" className="icons-container__section--link"><span className="flaticon-011-instagram"></span></Link>
                <Link to="/" className="icons-container__section--link"><span className="flaticon-010-linkedin"></span></Link>
                <Link to="/" className="icons-container__section--link"><span className="flaticon-008-youtube"></span></Link>
            </div>
        </section>
    );
}

export default SocialIcons;