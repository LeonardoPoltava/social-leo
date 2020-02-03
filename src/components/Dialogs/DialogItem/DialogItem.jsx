import React from 'react';
import "./DialogItem.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path ="/dialogs/" + props.id;
    return(
        <NavLink className="dialog" to={path}>
            <img src={props.avatar} alt="" className="dialog-avatar"/>
            <span className="dialog-name">{props.name}</span>
        </NavLink>
    )
};
export default DialogItem;