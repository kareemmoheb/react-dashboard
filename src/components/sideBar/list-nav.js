import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Nav = (props)=>{
    return(
      <div className="sidebar_nav">
        <ul>
          <li><NavLink to="/Home"><span className="icon-home"></span>Home</NavLink></li>
          <li><NavLink to="/Projects"><span className="icon-projects"></span>Projects</NavLink></li>
        </ul>
      </div>
    )


}
export default Nav;
