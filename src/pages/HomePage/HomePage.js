import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

function HomePage() {
    return (
        <main className="home-section">
            <div className="home-section__container">
                <h1 className="home-section__container--title">Conoce las novedades y <br/>
                        noticias del mundo Tech</h1>
                <button className="home-section__container--btn">
                    <Link to="/blogs" className="home-section__container--btn--link">Entra ya!</Link>
                </button>
            </div>
        </main>
    );
}

export default HomePage;