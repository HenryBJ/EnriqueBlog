import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {   
  render() {
    return (
        <div className="list-group-item">
            <h4 className="list-group-item-heading"><b>{this.props.username}</b> said:</h4>
            <p className="list-group-item-text">{this.props.comment}</p>
        </div>
    );
  }
}

export default Comment;