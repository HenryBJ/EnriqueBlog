import React, { Component } from 'react';
import './PostPage.css';
import PostDetail from '../PostDetail/PostDetail';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';

class PostPage extends Component {
  render() {
    return (           
     <div className="container">
        <PostDetail store={this.props.store} {...this.props} />
        <CommentForm store={this.props.store} {...this.props} />
        <hr/>
        <CommentList store={this.props.store} {...this.props} />
     </div>
    );
  }
}

export default PostPage;