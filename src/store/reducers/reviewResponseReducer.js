const initialState = {
  movieId: {}
};

const reviewReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_REVIEW":
      return {
        ...state,
        moviesId: payload
      };
    default:
      return {
        ...state
      };
  }
};

export default reviewReducer;
