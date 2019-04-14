import React, { Component } from 'react';
import './Post.css';
import {Link} from 'react-router-dom';

class Post extends Component {   
  shortText=(text)=>{
      let result=(text.length < 500)? text: text.slice(0,500)+ <b>...Click on details for more reading</b>
      console.log(result)
      return result
        
    }

  render() {
      const PostId= this.props.id
    return (
        <div className="panel panel-default">        
        <div className="panel-heading">
             <h2 className="panel-title">{this.props.title}</h2>
        </div>        
        <div className="panel-body">
        {(this.props.text.length < 500)?<div><p>{this.props.text}</p></div>:
        <div>
        <p>
        {this.props.text.slice(0,500)}
        <Link to ={`detail/${PostId}`} >...Read More</Link>
        </p>
        </div>}
        
        </div>        
            <div className="panel-footer">
            <span className="glyphicon glyphicon-user"></span> {this.props.username} &nbsp; 
            <span className="glyphicon glyphicon-time"></span> {this.props.timestamp} &nbsp;
            <span className="glyphicon glyphicon-comment"></span> {this.props.commentNumber} &nbsp;
            <Link className="btn btn-primary btn-xs my-to-right" to ={`detail/${PostId}`} ><span className="glyphicon glyphicon-eye-open"></span> Details</Link>
            </div>
        </div>

    );
  }
}

export default Post;