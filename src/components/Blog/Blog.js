import React from "react";

const Blog = (props) => {
    console.log(props.news)
    return (
        <div className="blog-container">
            <img className="blog-container__img" src={props.news.urlToImage} alt={props.news.title}/>
            <h1 className="blog-container__title">{props.news.title}</h1>
            <p className="blog-container__description">{props.news.description}</p>
        </div>
    );
}

export default Blog;