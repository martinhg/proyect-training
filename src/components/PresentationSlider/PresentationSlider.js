import React from "react";
import presentationImg from "../../assets/img/main-img.png";
import "./PresentationSlider.scss";

class PresentationSlider extends React.Component {

    state = {
        value: { min: 1, max: 100 },
    };

    componentDidMount() {
        document.querySelector(".slider-container input").addEventListener("input", function(){
            document.querySelector(".main-section").style.width = this.value + "%";
        });
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="slider-container">
                <section className="main-section">
                    <div className="main-section__presentation">
                        <p className="main-section__presentation--text-hello">Hello</p>
                        <h1 className="main-section__presentation--text-name"><span>I'm</span> Martin Herrera</h1>
                        <p className="main-section__presentation--text-description">Expert web design and development UI designer <br/> dribble behance uplabs</p>
                    </div>
                    <figure className="main-section__main-img">
                        <img src={presentationImg} alt="Martin Herrera"/>
                    </figure>
                </section>

                <section className="about-section">
                    <div className="about-section__about-img">
                        {/* <img src={} alt="Martin Herrera"/> */}
                    </div>
                    <div className="about-section__description">
                        <h2 className="about-section__description--title"><span>About</span> me</h2>
                        <p className="about-section__description--text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                        <p className="about-section__description--text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                        <button className="about-section__description--btn-know-me">See more..</button>
                    </div>
                </section>
                {/* <div className="original-image"></div> */}
                <input 
                    type="range" 
                    min="1" max="100" 
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default PresentationSlider;