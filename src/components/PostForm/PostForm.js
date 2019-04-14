import React, { Component } from 'react';
import './PostForm.css';
import {addPost} from '../../Redux/actionCreators'

class PostForm extends Component {   
    constructor(props)
    {
        super(props)
        this.submit= this.submit.bind(this)
    }  
  submit(e)
  {
    console.log(this);
      const { _username,_title, _text} = this.refs
      e.preventDefault();
      let new_post=addPost(_username.value,_title.value,_text.value)
      this.props.store.dispatch(new_post)      
      _text.value="";   
      _title.value="";
      _title.focus(); 
  }

  render() {
    return (
        <div className="row">   
          <div className="col-sm-10">
          <h5><b>Write a new post:</b></h5>    
          <form className="form-horizontal" onSubmit={this.submit}>
            <div className="form-group">
                <div className="col-sm-10">
                   <input ref="_username" type="text" className="form-control" id="inputUsername" placeholder="Write your username" required />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-10">
                    <input ref="_title" type="text" className="form-control" id="inputTitle" placeholder="Title of the Post" required />
                </div>
            </div>
            <div className="form-group">
            <div className="col-sm-10">
              <textarea ref="_text" type="text" className="form-control" id="inputPost" placeholder="Post here" required />
            </div>
          </div>       
            <div className="form-group">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-info">Post</button>
              </div>
            </div>
          </form>
        </div>
      </div>     
      

    );
  }
}

export default PostForm;