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
    console.log(resData);
    localStorage.setItem("token", resData.data);
    dispatch({
      type: "SUCCESS",
      payload: resData.data
    });
    alert("Sign Up Success");
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
    console.log(resData);
    localStorage.setItem("token", resData.data);
    dispatch({
      type: "SUCCESS",
      payload: resData.data
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

export const profile = () => async dispatch => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${baseUrl}/users/currentUser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      }
    });
    const data = await res.json();
    console.log(data);
    dispatch({
      type: "GET_PROFILE",
      payload: data.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};
