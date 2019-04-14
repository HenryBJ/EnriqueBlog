import React, { Component } from 'react';
import './HomePage.css';
import PostList from '../PostList/PostList'
import PostForm from '../PostForm/PostForm'
import PostFirst from '../PostFirst/PostFirst'

class HomePage extends Component {
  render() {
    return (               
     <div className="container">
        <PostFirst {...this.props} />
        <hr/>
        <PostForm {...this.props} />
        <hr/> 
        <PostList {...this.props} />
     </div>
    );
  }
}

export default HomePage;