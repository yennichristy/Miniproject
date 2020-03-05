const baseUrl = "https://reviewmoviedatabase.herokuapp.com/api/v1";

export const addReview = data => async dispatch => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${baseUrl}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await res.json();
    dispatch({
      type: "ADD_REVIEW",
      payload: resData
    });
  } catch (error) {
    dispatch({
      type: "FAILED_REVIEW",
      payload: error
    });
    console.log(error);
  }
};
