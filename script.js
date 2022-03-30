

const createCard = (title, desc, imgUrl, year, id) => {

  const divEl = document.createElement("div");
  const h3El = document.createElement("h3");
  const parDescEl = document.createElement("p");
  const imgEl = document.createElement("img");
  const parYearEl = document.createElement("p");
  // const contButton = document.createElement("div");
  // contButton.innerHTML = `<button class="deletButton"></button>`;

  const deletButton = document.createElement("button");
  deletButton.classList.add("deletButton");
  deletButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  /******************
        DELETE
 *****************/
  // const deletButton = document.querySelector(".deletButton")

  deletButton.addEventListener("click", () => {

    fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    }).then((data) => {
      location.reload()
    })
  });
  /******************
          PATCH
   *****************/
  const patchButton = document.createElement("button")
  patchButton.classList.add("patchButton")
  patchButton.innerHTML = `<i class="fas fa-ellipsis-v"></i>`;

  patchButton.addEventListener("click", (event) => {
    event.preventDefault();

    fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: inputDescription.value,
        genres: inputCategories.value,
        poster: inputPoster.value,
        title: inputTitle.value,
        year: inputYear.value,
      })

    }).then((data) => {
      location.reload();
    })
  });






  divEl.classList.add("card");
  parYearEl.classList.add("year");
  parDescEl.classList.add("description");

  imgEl.setAttribute("src", imgUrl);

  h3El.textContent = title;
  parDescEl.textContent = desc;
  parYearEl.textContent = year;


  divEl.append(h3El, imgEl, parDescEl, parYearEl, deletButton, patchButton,);
  document.querySelector(".containCard").appendChild(divEl);
};
/******************
        GET
 *****************/

const getMoviesData = async () => {
  const res = fetch("https://edgemony-backend.herokuapp.com/movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await (await res).json();
  console.log(data);
  return data
};
//card stampata da API 
getMoviesData().then((data) => {
  data.map((movie) =>
    createCard(movie.title, movie.description, movie.poster, movie.year, movie.id)
  );
});

//prendiamo i tag dal DOM
const inputTitle = document.getElementById("title");
const inputDescription = document.getElementById("description");
const inputPoster = document.getElementById("poster");
const inputYear = document.getElementById("year");
const inputCategories = document.getElementById("categories");
const inputSubmit = document.getElementById("submit");


/******************
        POST
 *****************/
inputSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("https://edgemony-backend.herokuapp.com/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: inputDescription.value,
      genres: inputCategories.value,
      poster: inputPoster.value,
      title: inputTitle.value,
      year: inputYear.value,
    })

  }).then((data) => {
    location.reload();
  })
});




































