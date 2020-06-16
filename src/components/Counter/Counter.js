import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, fetchPosts } from '../../actions';
import { logout } from '../../actions/auth';

class Counter extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        Posts: {this.props?.posts?.length}
        <button onClick={this.props.logout}>Logout</button>
        <h3>{this.props.count}</h3>
        <button onClick={() => this.props.increment(1)}>Increment</button>
        <button onClick={() => this.props.decrement(1)}>Decrement</button>
        <button onClick={() => this.props.increment(5)}>Increment 5</button>
        <button onClick={() => this.props.decrement(5)}>Decrement 5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    posts: state.jsonPlaceholder.posts,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  fetchPosts,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
