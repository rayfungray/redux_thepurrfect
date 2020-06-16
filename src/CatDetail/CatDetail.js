import React from 'react';
import axios from 'axios';


import './Cats.css';

class CatDetailView extends React.Component {
  state = {
    cat: null,
    editMode: false,
    editedCat: {},
  };

  async componentDidMount() {
    const url = `https://wta-cats.herokuapp.com/cat/${this.props.match.params.id}`;
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log('cats data:', data);
      this.setState({ cat: data, editedCat: data });
    } catch (err) {
      if (err.message === 'TOKEN_EXPIRED') {
        this.props.history.push('/login');
      }
      console.error(err);
    }
  }


  render(){
      if(this.state.cat){
        return(
            <div> {this.state.cat.name}</div>
            )
      }else{
          return(
              <div> Loading</div>
          )
      }
      
  }
}

export default CatDetailView;
