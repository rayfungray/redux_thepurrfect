// import jwt from 'jsonwebtoken';
import axios from 'axios';



function getData(data) {    
    return {
      type: 'SUCCESS',
      payload: {
        data
      },
    };
  }


  
export function getCat() {
    return async function (dispatch) {
      const url = 'https://wta-cats.herokuapp.com/cat';
      try {
        const { data } = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          
        dispatch(getData(data));
      } catch (err) {
        console.error(err);
      }
    };
}

