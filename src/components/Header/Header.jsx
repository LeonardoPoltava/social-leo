import React from 'react';
import Logo from "../../images/logo.png";
import "./Header.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="flex-space-b flex-center-y">
                    <img src={Logo} width={150} alt=""/>
                    <div className="login-box">
                        {props.isAuth ?
                            <div className={"flex-center-y header-nav"}><span className="user-name">{props.login}</span> <button onClick={props.getLogoutUserData} className="logout">Logout</button></div> :
                            <NavLink to="/login/">Login</NavLink>}
                    </div>
                </div>
            </div>
        </header>
    );
}
export default  Header;