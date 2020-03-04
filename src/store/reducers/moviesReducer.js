const initialState = {
  movies: [],
  error: null
};

const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies: payload
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
