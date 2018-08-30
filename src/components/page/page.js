import React from 'react';
import {  Route } from 'react-router-dom';
import Home from './home/home';
import Projects from './projects/projects';

const Pages = (props)=>{
  return (
    <div>
      <Route path="/Projects" component={Projects}/>
      <Route path="/Home" component={Home}/>
    </div>

  )
}
export default Pages
