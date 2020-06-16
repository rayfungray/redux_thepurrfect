import React from 'react';
import { connect } from 'react-redux';
import { getCat } from '../actions/cat'
import CatCard from '../components/CatCard';




class CatsView extends React.Component {
  

    componentDidMount() {
        this.props.getCat();
        
        
    }

  render () {
      if(this.props.data){
        return (
            <div>
                {console.log(this.props.data)}
                {this.props.data.map((c) => <CatCard key={c._id} cat={c} />)}
                 
            </div>
          );
        }else{
            return(
                <div>Empty</div>
            )
        }
      }
    
}



 
const mapStateToProps = (state) => {
    return {
      data: state.cat.data,
    };
  };
  
  const mapDispatchToProps = {
    getCat,
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(CatsView);

