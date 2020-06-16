import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

class Home extends React.Component {

    render(){
        if(this.props.isLoggedIn){
            return (
            <div>Welcome, {this.props.user.name}            
            <button onClick={this.props.logout}>Logout</button>               
            </div>);
          }else{
            return <div>Homepage</div>;
            }
    }

}
    


const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn,
      user: state.auth.user
    };
  };

  const mapDispatchToProps = {
    logout: logout
  };



export default connect(mapStateToProps, mapDispatchToProps)(Home);
