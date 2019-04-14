import React, { Component } from 'react';
import Comment from '../Comment/Comment'
import './CommentList.css';

class CommentList extends Component {   
  render() {
      let {match:{match:{params:{id:PostId}}}} = this.props
     const [{comments}]= this.props.store.getState().filter(post=>Number(post.id)===Number(PostId))
    return (        
        <div className="list-group">
        {(comments.length)?<h3>Comments:</h3>:<div className="alert alert-info" role="alert"><i className="fa fa-commenting"></i> No Commnet yet, be the first</div>}
        {comments.map((p,i)=><Comment key={i} {...p} />)} 
        </div>
    );
  }
}

export default CommentList;