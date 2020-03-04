const baseUrl = "https://reviewmoviedatabase.herokuapp.com/api/v1";

export const movieList = data => async dispatch => {
  try {
    const getMovieRes = await fetch(
      `${baseUrl}/movies/searchall?limit=15&page=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    );
    const dataMovie = await getMovieRes.json();
    console.log(dataMovie);
    dispatch({
      type: "GET_MOVIES",
      payload: dataMovie.data.docs
    });
  } catch (error) {
    console.log(error);
  }
};
