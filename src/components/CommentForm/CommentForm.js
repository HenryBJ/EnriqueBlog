import React, { Component } from 'react';
import './CommentForm.css';
import {addComment} from '../../Redux/actionCreators'

class CommentForm extends Component {   
    constructor(props)
    {
        super(props)
        this.submit= this.submit.bind(this)
    }  
  submit(e)
  {
      const { _commentUsername,_comment} = this.refs
      e.preventDefault();    
      let {match:{match:{params:{id:PostId}}}} = this.props  
      let new_comment=addComment(_commentUsername.value,PostId,_comment.value)
      this.props.store.dispatch(new_comment)     
      _comment.value="";
      _commentUsername.focus(); 
  }

  render() {
    return (
      <div>
      <hr />
      <h3>Leave a comment</h3>
        <form className="form-inline" onSubmit={this.submit}>
        <div className="form-group">         
          <input ref="_commentUsername" type="text" className="form-control" id="inputCommentUsername" placeholder="Username" required />
        </div>
        <div className="form-group">          
          <input ref="_comment" type="text" className="form-control" size="50" id="inputComment" placeholder="Comment" required />
        </div>
        <button type="submit" className="btn btn-default"><i className="fa fa-comment my-comment"></i></button>
      </form>
      </div>

    );
  }
}

export default CommentForm;