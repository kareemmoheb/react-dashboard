import React , { Component } from 'react';
import './sidebar.css';

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = { active: 'non-active'}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick =  ()=> {
    this.setState({ active: 'active' });
    }
    render(){
        let className = this.state.active ? 'non-active' : 'active';
        return (
            
            <div className="sidebar_nav">
                <ul>
                    <li className={className} onClick={this.handleClick}><span className="icon-home"></span>Home</li>
                    <li className={className} onClick={this.handleClick}><span className="icon-projects"></span>Projects</li>
                    <li><span className="icon-messages"></span>Messages</li>
                    <li><span className="icon-analytics"></span>Analytics</li>
                    <li><span className="icon-tasks"></span>Tasks</li>
                    <li><span className="icon-calendar"></span>Calendar</li>
                    <li><span className="icon-layouts"></span>Layouts</li>
                    <li><span className="icon-accounts"></span>Accounts</li>
                </ul >
            </div>

            
        )
    }
}
export default Nav;