// API URL
const API_URL = 'https://api.tvmaze.com';

// Get movies function
async function getMovies() {
  try {
    const response = await fetch(`${API_URL}/shows`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Render movies function
function renderMovies(movies) {
  const moviesContainer = document.getElementById('movies-container');

  movies.forEach((movie) => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    const imgElement = document.createElement('img');
    imgElement.src = movie.image.medium;

    const overlayElement = document.createElement('div');
    overlayElement.classList.add('overlay');

    const overlayTextElement = document.createElement('div');
    overlayTextElement.classList.add('overlay-text');
    overlayTextElement.innerHTML = `
      <h2>${movie.name}</h2>
      <p>${movie.summary}</p>
      <p>Rating: ${movie.rating.average}</p>
      <p>Duration: ${movie.runtime} min</p>
    `;

    overlayElement.appendChild(overlayTextElement);
    movieElement.appendChild(imgElement);
    movieElement.appendChild(overlayElement);
    moviesContainer.appendChild(movieElement);
  });
}

// Search movies function
async function searchMovies(query) {
  try {
    const response = await fetch(`${API_URL}/search/shows?q=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Event listener for search button
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', async () => {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value;
  const moviesContainer = document.getElementById('movies-container');
  moviesContainer.innerHTML = '';

  const data = await searchMovies(query);
  const movies = data.map((result) => result.show);
  renderMovies(movies);
});

// Main function
async function main() {
  const movies = await getMovies();
  renderMovies(movies);
}

main();
