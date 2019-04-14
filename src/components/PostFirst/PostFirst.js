import React, { Component } from 'react';
import './PostFirst.css';

class PostFirst extends Component {   
    render() {     
     console.log(this.props)
     const [{title,username,text}]= this.props.store.getState()   
    
    return (     
        <div className="row">
            <div className="col-sm-10">
            <h1>{title}</h1>            
            <p className="my-font">{text}</p>
            <b>Author:</b> {username}
            </div>            
            
        </div>
    );
  }
}

export default PostFirst;