const baseUrl = "https://reviewmoviedatabase.herokuapp.com/api/v1";

export const signUp = data => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await res.json();
    localStorage.setItem("token", resData.token);
    dispatch({
      type: "SUCCESS",
      payload: res.resData
    });
  } catch (error) {
    localStorage.removeItem("token");
    dispatch({
      type: "FAILED",
      payload: error
    });
    console.log(error);
  }
};

export const signIn = data => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await res.json();
    localStorage.setItem("token", resData.token);
    dispatch({
      type: "SUCCESS",
      payload: res.resData
    });
  } catch (error) {
    localStorage.removeItem("token");
    dispatch({ type: "FAILED" });
    console.log(error);
  }
};
