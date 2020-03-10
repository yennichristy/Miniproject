const baseUrl = "https://reviewmoviedatabase.herokuapp.com/api/v1";

export const getReview = id => async dispatch => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${baseUrl}/reviews/afterlogin?movieId=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      }
    });
    const data = await res.json();
    console.log("lolo", data);
    dispatch({
      type: "GET_REVIEW",
      payload: data.data.allDataReview
    });
  } catch (error) {
    console.log(error);
  }
};

export const getBefore = id => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/reviews/beforelogin?movieId=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    const data = await res.json();
    console.log("bef", data);
    dispatch({
      type: "GET_BEFORE",
      payload: data.data.allDataReview
    });
  } catch (error) {
    console.log(error);
  }
};
