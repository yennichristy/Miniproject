import { GET, ERROR, ADD_POST, DEL_POST } from "./types";
const baseURL = "https://jsonplaceholder.typicode.com";

export const getMovies = () => async dispatch => {
  try {
    const res = await fetch(`${baseURL}/todos?_limit=10`);
    const data = await res.json();
    dispatch({
      type: GET,
      payload: data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      payload: error
    });
  }
};

export const addMovie = post => async dispatch => {
  try {
    const res = await fetch(`${baseURL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: post })
    });
    const data = await res.json();
    dispatch({
      type: ADD_POST,
      payload: data
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const delMovie = id => async dispatch => {
  try {
    const delres = await fetch(`${baseURL}/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    await delres.json();
    dispatch({
      type: DEL_POST,
      payload: id
    });
  } catch (error) {
    console.log(error);
  }
};
