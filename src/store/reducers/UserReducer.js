const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticate: false,
  user: null,
  error: null
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SUCCESS":
      return {
        ...state,
        token: payload.token,
        isAuthenticate: true,
        user: payload.user
      };
    case "FAILED":
      return { ...state, error: payload.error };
    default:
      return { ...state };
  }
};

export default userReducer;
