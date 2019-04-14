import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './PostDetail.css';

class PostDetail extends Component {    
    render() {     
        let {match:{match:{params:{id:PostId}}}} = this.props
        const [{title,username,text}]= this.props.store.getState().filter(post=>Number(post.id)===Number(PostId))   
    return (     
        <div className="row">
            <div className="col-sm-10">
            <h1>{title}</h1>
            <h4><b>Author:</b> {username}</h4>
            <p className="my-font">{text}</p>
            <Link className="btn btn-default btn-xs" to ="/" ><span className="glyphicon glyphicon-home"></span> Back to Home Page</Link>      
            </div>            
            <hr/>
        </div>
    );
  }
}

export default PostDetail;