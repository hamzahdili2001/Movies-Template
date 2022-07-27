// Movie Slider

const nextMovie = document.querySelector(".next");
const prevMovie = document.querySelector(".prev");
const movies = document.querySelectorAll("section.home .slide .movie");
const pagination = document.querySelectorAll(".pagination ul li");
let count = 0;

nextMovie.addEventListener("click", () => {
  count >= movies.length - 1 ? (count = 0) : count++;
  movies.forEach((movie) => {
    if (movie.classList.contains("active")) {
      movie.classList.remove("active");
    }
  });

  movies[count].classList.add("active");
  paginate(count);
});

prevMovie.addEventListener("click", () => {
  count === 0 ? (count = movies.length - 1) : count--;
  movies.forEach((movie) => {
    if (movie.classList.contains("active")) {
      movie.classList.remove("active");
    }
  });
  movies[count].classList.add("active");
  paginate(count);
});

function paginate(index) {
  pagination.forEach((li) => {
    if (li.classList.contains("active")) {
      li.classList.remove("active");
    }

    pagination[index].classList.add("active");
  });
}

// Movie Scrolling Slide

const scrollLeft = document.querySelectorAll(".left-btn");
const scrollRight = document.querySelectorAll(".right-btn");
const moviesList = document.querySelectorAll(".list");

scrollRight.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    console.log(moviesList[index].scrollLeft);
    if (
      moviesList[index].scrollLeft === moviesList[index].scrollLeftMax ||
      moviesList[index].scrollLeft > 1295
    ) {
      moviesList[index].scrollTo(0, 0);
    } else {
      moviesList[index].scrollBy(210, 0);
    }
  });
});

scrollLeft.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (moviesList[index].scrollLeft === 0) {
      moviesList[index].scrollTo(1470, 0);
    } else {
      moviesList[index].scrollBy(-210, 0);
    }
  });
});
