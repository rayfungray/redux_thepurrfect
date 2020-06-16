import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';

import ProtectedRoute from '../ProtectedRoute';
import Counter from '../Counter/Counter';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Home from '../Home/Home';
import CatsView from '../../cats/CatsView'
import CatDetailView from '../../CatDetail/CatDetail'
import './App.css'



// logout = () => {
//   deleteToken();
//   this.setState({ user: null });
// };


class App extends React.Component {

  renderNav = () => {
    if (!this.props.isLoggedIn) {
      return (
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </nav>
      );
    } else {
      return (
        <nav>
          <Link to={'/'}>Home </Link> 

          <span>User: {this.props.user.name}</span>
          <Link to={'/cats'}>Cats</Link>        
        </nav>
      );
    }
  };
  




  render(){
    return (
      
      <Router>
        {this.renderNav()}
        <div>
        <ProtectedRoute
          path='/cats'
          exact
          Component={CatsView}
          isAuthenticated={this.props.isLoggedIn}
        />
        <ProtectedRoute
          path='/cats/:id'
          Component={CatDetailView}
          isAuthenticated={this.props.isLoggedIn}
        />
        <Route path='/' exact component={Home}></Route>
        <Route path='/signup' exact component={Signup}></Route>
        <Route path='/login' exact component={Login}></Route>
      </div>
      </Router>
      
    );
  }
  }
  



const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user
  };
};



export default connect(mapStateToProps, null)(App);

