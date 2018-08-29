import React , { Component } from 'react';
import Header from './header';
import './sidebar.css';
import Avatar from './avatar';
import Nav from './list-nav'
const imagePath = process.env.PUBLIC_URL + '/assets/images/';
let user = [
    {
        id: 1,
        firstName: "Jack ",
        lastName: "Williams",
        job: "UI/UX Designer",
        imgSrc: imagePath + 'avatar/jackavatar.jpg'
    },
    {
        id: 2,
        firstName: "Kate ",
        lastName: "Beckinsale",
        job: "Project Manager",
        imgSrc:'',
    },
    {
        id: 3,
        firstName: "Mickey ",
        lastName: "Thompson",
        job: "Developer",
        imgSrc:'',
    },
    {
        id: 4,
        firstName: "Brian ",
        lastName: "Deegan",
        job: "Web Designer",
        imgSrc:'',
    },
]

class SideBar extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="row">
                <div className="sidebar col-3">
                    <Header />
                    <Avatar user = {user}/>
                    <Nav />
                </div>
            </div>

           
        )  
    }
}
export default SideBar;