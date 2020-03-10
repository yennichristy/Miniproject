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
    dispatch({
      type: "GET_BEFORE",
      payload: data.data.allDataReview
    });
  } catch (error) {
    console.log(error);
  }
};

export const addReview = dataReview => async dispatch => {
  console.log(dataReview);
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${baseUrl}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      },
      body: JSON.stringify(dataReview)
    });
    await res.json();
  } catch (error) {
    dispatch({
      type: "FAILED_REVIEW",
      payload: error
    });
    console.log(error);
  }
};
