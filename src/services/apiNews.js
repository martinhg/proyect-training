const apiKey = '6ebc89a3bcbf4ee5a69217db7df42c70';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

const apiNews = async () => {
    const response = await fetch(`${url}`);
    const data = await response.json();

    return data;
}

export default apiNews;