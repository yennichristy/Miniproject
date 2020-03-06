const baseUrl = "https://reviewmoviedatabase.herokuapp.com/api/v1";

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
    const resData = await res.json();
    console.log("lala", resData);
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
