// Create Movies in Search-movies.html
const moviesContainer = document.querySelector(".movies-container");

const imagesCount = 15;

for (i = 1; i < imagesCount; i++) {
  const movieContainer = document.createElement("div");
  movieContainer.setAttribute("class", "movie-s");
  const movieTitle = document.createElement("h3");
  movieTitle.setAttribute("class", "movie-title");
  const movieLink = document.createElement("a");
  movieLink.setAttribute("href", "movie-details.html");
  movieLink.innerHTML = "Movie Title";
  movieTitle.appendChild(movieLink);
  movieContainer.setAttribute(
    "style",
    `background-image : url(images/movie-${i}.jpg)`
  );

  //   Appending

  movieContainer.appendChild(movieTitle);
  //   Appending To Main Container
  moviesContainer.appendChild(movieContainer);
  // Adding Images:
}
