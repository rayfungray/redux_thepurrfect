export default function reducer(
  state = { isLoggedIn: false, user: null, token: null },
  action
) {
  switch (action.type) {
    case 'AUTHENTICATE':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
}
