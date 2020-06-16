// takes current app state & action & RETURNS the new state
export default function reducer(state = { posts: [] }, action) {
  switch (action.type) {
    case 'GET_POSTS':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
