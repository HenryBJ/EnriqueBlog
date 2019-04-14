import React, { Component } from 'react';
import Post from '../Post/Post'
import './PostList.css';
//import PostsMock from '../../data/PostsMock'

class PostList extends Component {    
    render() {                
    return (     
        <div className="row">        
            <div className="col-sm-10">
            <h4><b>Others Posts:</b></h4>
            {(this.props.store.getState().length === 0)?
                <div className="alert alert-info" role="alert"><i className="fa fa-bug"></i> No Post, add one</div> :
                this.props.store.getState().map((p,i)=><Post key={i} {...p} />)}      
            </div>
        </div>
    );
  }
}

export default PostList;