import React from 'react';
import './sidebar.css';
const imagePath = process.env.PUBLIC_URL + '/assets/images/';

const Header = ()=>{
    return (
       <div className="sidebar_header">
            <img src={`${imagePath}logo.svg`} alt="" className="sidebar_header_logo img-fluid" />
            <img src={`${imagePath}navicon.png`} alt="" className="nav-icon sidebar_header_navicon img-fluid" />
       </div>
    );
}

export default Header;