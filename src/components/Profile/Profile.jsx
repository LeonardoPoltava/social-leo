import React from 'react';
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer store={props.store} />
        </div>
    );
}
export default Profile;