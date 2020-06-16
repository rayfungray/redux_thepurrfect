export default function reducer( state = { data:null}, action) {
    switch (action.type) {
      case 'SUCCESS':
        return {
          ...state,          
          data: action.payload.data,
        };
      default:
        return state;
    }
  }
  