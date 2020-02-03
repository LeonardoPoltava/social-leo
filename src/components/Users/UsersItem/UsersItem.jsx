import React from 'react';
import "./UsersItem.css";
import {NavLink} from "react-router-dom";

const UsersItem = ({user, followingInProgress, unfollow, follow}) => {
    let path ="/profile/" + user.id;
    return(
        <div className="dialog find-dialog">
            <div className="dialog-side">
                <NavLink to={path}><img src={user.photos.small != null ? user.photos.small : "https://pbs.twimg.com/profile_images/917600255276752896/36T_GP-n_400x400.jpg"} alt="" className="dialog-avatar"/></NavLink>
                {
                    user.followed ?
                        <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            className="dialog-follow-btn"
                            onClick = {() => {
                                unfollow(user.id)
                            }}
                        >
                            unfollow
                        </button>
                        :
                        <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            className="dialog-follow-btn"
                            onClick = {() => {
                                follow(user.id)
                            }}
                        >
                            follow
                        </button>
                }

            </div>
            <div className="user-content">
                <span className="dialog-name">{user.name}</span>
                <span className="dialog-status">{user.status != null ? user.status : "This is empty status"}</span>
            </div>
            <div className="user-locaion">
                <span className="user-country">{user.country}</span>
                <span className="user-city">{user.city}</span>
            </div>
        </div>
    )
};
export default UsersItem;