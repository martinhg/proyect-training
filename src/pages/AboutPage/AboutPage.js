import React from "react";
import PresentationSlider from "../../components/PresentationSlider/PresentationSlider";
import Proyect from "../../components/Proyect/Proyect";
import proyect1 from "../../assets/img/proyect-1.jpg";
import "./AboutPage.scss";

const AboutPage = () => {
    return (
        <main className="about-container">
            {/* <PresentationSlider /> */}
            <section className="proyects-section">
                <div>
                    <h1>Mis proyectos</h1>
                    <div className="proyects-section__container">
                        <Proyect image={proyect1} title="Ecommerce" description="asdsadsadadadsa" />
                        <Proyect image={proyect1} title="Badges" description="asdsadsadadadsa" />
                        <Proyect image={proyect1} title="Chat Bot" description="asdsadsadadadsa" />
                        <Proyect image={proyect1} title="Chat App" description="asdsadsadadadsa" />
                        <Proyect image={proyect1} title="Trip App" description="asdsadsadadadsa" />
                    </div>
                </div>
            </section>
        </main>   
    );
}

export default AboutPage;