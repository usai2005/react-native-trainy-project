export const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, login: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };

    default:
      return state;
  }
};
