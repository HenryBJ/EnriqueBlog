import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">            
            <a className="navbar-brand" href="/"><i className="fa fa-comment-o"></i> Enrique's Blog</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;