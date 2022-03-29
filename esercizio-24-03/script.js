import { getMoviesData, patchMoviesData, deleteMoviesData, postMoviesData } from "./api.js";
import { createCard } from "./utility.js";

const myApp = async () => {
  const movies = await getMoviesData();
  const container = document.querySelector(".containCard");

  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputPoster = document.getElementById("poster");
  const inputYear = document.getElementById("year");
  const inputCategories = document.getElementById("categories");

  const cardsToString = movies
    .map((movie) =>
      createCard(
        movie.title || "",
        movie.description || "",
        movie.poster || "",
        movie.year || "",
        movie.id || ""
      )
    )
    .join("");

  container.innerHTML = cardsToString;
  document
    .querySelector(`#submit`)
    .addEventListener("click", () =>
      postMoviesData(
        inputTitle.value,
        inputDescription.value,
        inputCategories.value,
        inputPoster.value,
        inputYear.value,

      )
    );
  movies.forEach((element) => {
    document
      .querySelector(`#patchCard${element.id}`)
      .addEventListener("click", () =>
        patchMoviesData(
          inputTitle.value,
          inputDescription.value,
          inputCategories.value,
          inputPoster.value,
          inputYear.value,
          element.id
        )
      );

    document
      .querySelector(`#deleteCard${element.id}`)
      .addEventListener("click", () => deleteMoviesData(element.id));
  });

  const cardImg = document.querySelector("img");
  const deleteCard = document.querySelector("deleteCard");
  const patchCard = document.querySelector("patchCard");
  cardImg.addEventListener("click", () => {
    card.classList.toggle("cardEffect")
    card.classList.toggle("card")
    deleteCard.classList.toggle("d_none");
    patchCard.classList.toggle("d_none");
  })

};


myApp();
