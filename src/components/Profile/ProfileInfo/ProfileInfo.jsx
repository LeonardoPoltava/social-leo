import React from 'react';
import "./ProfileInfo.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";
const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile) {
        return <Preloader/>
    }
    else {
        return (
            <div className="">
                <h1>Profile</h1>
                <div className="description">
                    <img src={profile.photos.large ? profile.photos.large : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwuab-TXFNmiH1vzYJx_Oo7Dtxe0XtogHfy1hZwRHPx5Y4EOvS&s"} alt="" className="avatar"/>
                    <div className="profile-info-box">
                        <span className="profile-name">{profile.fullName}</span>
                        <ProfileStatusHooks status={status} updateStatus={updateStatus} />
                    </div>
                </div>
            </div>
        );
    }
}
export default ProfileInfo;