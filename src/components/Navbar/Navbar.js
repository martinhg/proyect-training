import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./Navbar.scss";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar-section">
                <div className="navbar-section__hamburger">
                    <div className="navbar-secttion__hamburger--line"></div>
                    <div className="navbar-secttion__hamburger--line"></div>
                    <div className="navbar-secttion__hamburger--line"></div>
                </div>
                <div className="navbar-section__nav-container">
                    <section className="navbar-section__nav-container__logo">
                        <Link to="/" className="navbar-section__nav-container__logo--container">
                            <img className="navbar-section__nav-container__logo--container--img" src={logo} alt="Logo"/>
                        </Link>
                    </section>
                    <section className="navbar-section__nav-container__links">
                        <Link to="/newSocio" className="navbar-section__nav-container__links--link">Ser socio</Link>
                        <Link to="/blogs" className="navbar-section__nav-container__links--link">Blogs</Link>
                        <Link to="/about" className="navbar-section__nav-container__links--link">Sobre mi</Link>
                    </section>
                </div>
            </nav>
        // <div className="Navbar">
        //     <div className="container-fluid">
        //         <Link className="Navbar__brand" to="/">
        //             <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
        //             <span className="font-weight-light">Martin</span>
        //             <span className="font-weight-bold">Conf</span>
        //         </Link>
        //     </div>
        // </div>
        );
    }
}

export default Navbar;
