import React , { Component } from 'react';
import './sidebar.css';


class Avatar extends Component{
  render(){
    return (
      <div className="sidebar_avatar">
        <div className="sidebar_avatar_img ">
          <img src={this.props.user[0].imgSrc} alt="" className="img-fluid" />                 
        </div>
        <div className="sidebar_avatar_name">{this.props.user[0].firstName} <br /> {this.props.user[0].lastName}</div>
      </div>
    )
  }
}
export default Avatar;