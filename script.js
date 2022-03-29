
/* 


// const getMoviesData = async () => {
//   const res = await fetch("https://edgemony-backend.herokuapp.com/movies", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });



const getMoviesData = async () => {
  const res = await fetch("https://edgemony-backend.herokuapp.com/movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status >= 200 && res.status <= 299) {
    return await res.json();
  } else {
    // Redirect
    // window.location.href = "/";

    const h1El = document.createElement("h1");
    h1El.textContent = "404 pagina non trovata";

    document.body.append(h1El);

    throw new Error("La pagina non è stata trovata");
  }
};

getMoviesData().then((resultAPI) => {
  resultAPI.map((movie) =>
    createCard(
      movie.title,
      formatMinText(movie.description),
      movie.poster,
      movie.year
    )
  );
});

try {
  throw new Error("ERRORREERERE");
} catch (err) {
  console.log(err);
}

const rickEMorty = {
  description: "Wubba Lubba Dub Dub",
  genres: ["animation"],
  poster: "https://m.media-amazon.com/images/I/81LBzgzf0iL._AC_SY741_.jpg",
  title: "Rick & Morty",
  year: 2014,
}; */

// HTTP Method POST
// fetch("https://edgemony-backend.herokuapp.com/movies", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(rickEMorty),
// });

// HTTP Method DELETE
// fetch("https://edgemony-backend.herokuapp.com/movies/4", {
//   method: "DELETE",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
/* 
// FORM Aggiunta movie/poster
const titleInputEl = document.getElementById("title");
const descInputEl = document.getElementById("description");
const posterInputEl = document.getElementById("poster");
const yearInputEl = document.getElementById("year");
const submitInputEl = document.getElementById("submit");

submitInputEl.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("https://edgemony-backend.herokuapp.com/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: descInputEl.value,
      genres: ["animation"],
      poster: posterInputEl.value,
      title: titleInputEl.value,
      year: yearInputEl.value,
    }),
    
  }).then((data) => {
    
    location.reload();

    // setTimeout(() => {
    //   location.reload();
    // }, 5000);
  });
});
 */


// import createCard from "./utility";

/********************************************************************************************************************************************/

/* 

Esercizio
Sulla base della lezione odierna:

Creare una pagina web che mostri i risultati ottenuti dalla
 seguente API: https://edgemony-backend.herokuapp.com/movies

Creare un form che permetta all'utente di aggiungere un nuovo movie all'interno

Aggiungere una 'X' ad ogni card, rappresentante il movie,
al cui click rimuove lo stesso dal server

Avanzato
All'esercizio cui sopra, provare ad aggiungere una modale al
 cui click mostri la descrizione per intero del movie in questione. */




const createCard = (title, desc, imgUrl, year, id,) => {

  const divEl = document.createElement("div");
  const h3El = document.createElement("h3");
  const parDescEl = document.createElement("p");
  const imgEl = document.createElement("img");
  const parYearEl = document.createElement("p");


  const deletButton = document.createElement("button")
  deletButton.classList.add("deletButton")

  const patchButton = document.createElement("button")
  patchButton.classList.add("patchButton")


  // patchButton.document.createElement("button")
  // patchButton.classList.add("patchButton")

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





  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputPoster = document.getElementById("poster");
  const inputYear = document.getElementById("year");
  const inputCategories = document.getElementById("categories");
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
  imgEl.setAttribute("alt", "img cosi");
  h3El.textContent = title;
  parDescEl.textContent = desc;
  parYearEl.textContent = year;

  // deletButton.textContent = id;







  divEl.append(imgEl, h3El, parDescEl, parYearEl, deletButton, patchButton);
  document.querySelector(".containCard").appendChild(divEl);
};








//prendiamo i tag dal DOM
const inputTitle = document.getElementById("title");
const inputDescription = document.getElementById("description");
const inputPoster = document.getElementById("poster");
const inputYear = document.getElementById("year");
const inputCategories = document.getElementById("categories");
// const deletButton = document.createElement("button");

const inputSubmit = document.getElementById("submit");
//prendiamo i valori dagli input, creiamo la nostra
//card da mandare al server.




const patchButton = document.createElement("button")
patchButton.classList.add("patchButton")




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








const formatDescriptionMaxtext = (text) => text.slice(0, 30);
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

