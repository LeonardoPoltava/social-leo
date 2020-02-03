import React from 'react';
import "./Sidebar.css"
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li><NavLink to="/profile/">Profile</NavLink></li>
                <li><NavLink to="/dialogs/">Messages</NavLink></li>
                <li><NavLink to="/news/">News</NavLink></li>
                <li><NavLink to="/music/">Music</NavLink></li>
                <li><NavLink to="/settings/">Settings</NavLink></li>
                <li><NavLink to="/users/">Find users</NavLink></li>
            </ul>
        </nav>
    );
}
export default  Sidebar;