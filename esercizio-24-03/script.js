import { getMoviesData, postMoviesData, patchMoviesData, deleteMoviesData } from "./api.js";
import { createCard } from "./utility.js";

const myApp = async () => {
  const movies = await getMoviesData();
  const container = document.querySelector(".containCard");

  const inputTitle = document.getElementById("title");
  const inputPoster = document.getElementById("poster");
  const inputDescription = document.getElementById("description");
  const inputYear = document.getElementById("year");
  const inputCategories = document.getElementById("categories");

  const cardsToString = movies
    .map((movie) =>
      createCard(
        movie.id,
        movie.title,
        movie.poster,
        movie.description,
        movie.year
      )
    )
    .join("");

  container.innerHTML = cardsToString;
  document
    .querySelector(`#submit`)
    .addEventListener("click", () =>
      postMoviesData(
        inputTitle.value,
        inputPoster.value,
        inputDescription.value,
        inputCategories.value,
        inputYear.value
      )
    );

  movies.forEach((element) => {
    document
      .querySelector(`#patchCard${element.id}`)
      .addEventListener("click", () =>
        patchMoviesData(
          element.id,
          inputTitle.value,
          inputPoster.value,
          inputDescription.value,
          inputCategories.value,
          inputYear.value,

        )
      );

    document
      .querySelector(`#deleteCard${element.id}`)
      .addEventListener("click", () => deleteMoviesData(element.id));
  });

  const card = document.querySelector("#card");
  const cardImg = document.querySelector("#cardImg");

  const patch_delete = document.querySelector(".patch_delete");

  cardImg.addEventListener("click", () => {
    card.classList.toggle("cardEffect")
    card.classList.toggle("card")
    patch_delete.classList.toggle("d_none");

  })

};


myApp();
