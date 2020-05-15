import React from "react";
import "./BlogsPage.scss";
import Blog from "../../components/Blog/Blog";
import api from "../../services/apiNews";

class BlogsPage extends React.Component {

    state = {
        loading: true,
        error: null,
        data: {
            articles: []
        },
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const data = await api();
            console.log(data);
            this.setState({ loading: false, data: data });
        }
        catch(error) {
            console.log(error);
        }
    }

    render() {
        return (
            <main className="blogs-main">
                <section className="blogs-news-container">
                    <div className="grid-container blogs-main-new">
                        <h3>Noticias</h3>
                        <div className="blogs-news-img-container">
                            <img src="./assets/img/noticia.jpg" alt="Imagen de la noticia" />
                        </div>
                        <div className="blogs-news-info-container">
                            <h2>Avances en los ordenadores</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a className="blogs-button" href="blog.html">Leer mas..</a>
                        </div>
                    </div>    
                </section>
                <section className="blogs-posts-container">
                    <div className="grid-container">
                        <h4>Últimos blogposts</h4>
                        <ul>
                            <li>
                                {this.state.data.articles.map(inform => (
                                <Blog news= {inform}/>
                                ))}
                            </li>
                        </ul>
                        
                        
                    </div>
                </section>
            </main>
        );
    }
}

export default BlogsPage;