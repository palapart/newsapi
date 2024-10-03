const apiKey = 'ecf19a67c0d5437f88e6d9d3047104b5';
const apiUrl = 'news-4.json';

async function fetchNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching the news:', error);
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    articles.forEach(article => {
        const articleEl = document.createElement('div');
        articleEl.classList.add('news-card');

        const imageUrl = article.urlToImage || 'https://via.placeholder.com/150';

        articleEl.innerHTML = `
            <img src="${imageUrl}" alt="News Image">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        newsContainer.appendChild(articleEl);
    });
}

fetchNews();
