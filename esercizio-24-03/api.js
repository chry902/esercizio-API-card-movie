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
  title,
  description,
  genres,
  poster,
  year,
  id
) => {
  await fetch(`https://edgemony-backend.herokuapp.com/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description,
      genres,
      poster,
      title,
      year,
    }),
  });

  location.reload();
};


export const patchMoviesData = async (
  title,
  description,
  genres,
  poster,
  year,
  id
) => {
  await fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description,
      genres,
      poster,
      title,
      year,
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
