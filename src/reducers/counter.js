// takes current app state & action & RETURNS the new state
export default function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + action.payload };
    case 'DECREMENT_COUNT':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}
