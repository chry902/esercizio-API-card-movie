export const getMoviesData = async () => {
  const res = await fetch("https://edgemony-backend.herokuapp.com/movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};


export const postMoviesData = async (
  id,
  title,
  poster,
  description,
  genres,
  year

) => {
  await fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({

      title,
      poster,
      description,
      genres,
      year,
      id
    }),
  });

  location.reload();
};


export const patchMoviesData = async (
  id,
  title,
  poster,
  description,
  genres,
  year,

) => {
  await fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      poster,
      description,
      genres,
      year
    }),
  });

  location.reload();
};


export const deleteMoviesData = async (id) => {
  await fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  location.reload();
};
