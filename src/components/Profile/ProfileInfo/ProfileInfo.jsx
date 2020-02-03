import React , {useState} from 'react';
import "./ProfileInfo.css";
import ProfileStatusHooks from "./ProfileStatusHooks";
import ProfileDataForm from "./ProfileDataForm";
import Preloader from "../../common/preloader/Preloader";
const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const onMainPhotoSelected = (e) =>{
        if(e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };
    let [editMode,setEditMode] = useState(false);

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    };
    if(!profile) {
        return <Preloader/>
    }
    return (
        <div className="">
            <h1>Profile</h1>
            <div className="description">
                <div className="description-holder">
                    <div className="photo-holder">
                        <img src={profile.photos.large ? profile.photos.large : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwuab-TXFNmiH1vzYJx_Oo7Dtxe0XtogHfy1hZwRHPx5Y4EOvS&s"} alt="" className="avatar"/>
                        {isOwner &&
                        <>
                            <input type='file' onChange={onMainPhotoSelected} id={"add-photo"} className={'add-photo'} />
                            <label htmlFor="add-photo">Add photo</label>
                        </>
                        }
                    </div>
                    <div className="profile-info-box">
                        <span className="profile-name">{profile.fullName}</span>
                        <ProfileStatusHooks status={status} updateStatus={updateStatus} />
                    </div>
                </div>
                {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> : <ProfileData activateEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} /> }
            </div>
        </div>
    );
};
const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return <ul className="profile-info-list">
        {isOwner && <li className={"profile-info-list__elem"}>
            <button onClick={activateEditMode}>Edit</button>
        </li>}
        <li className={"profile-info-list__elem"}>
            <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"};
        </li>
        {profile.lookingForAJob && // Если Ищу работу равно тру
        <li className={"profile-info-list__elem"}>
            <b>My professional skills:</b> {profile.lookingForAJobDescription};
        </li>
        }
        <li className={"profile-info-list__elem"}>
            <b>About me:</b> {profile.aboutMe};
        </li>
        <li className={"profile-info-list__elem"}>
            <b>Contacts:</b>
            <div className="contacts-list">
                {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    }
                )}
            </div>
        </li>
    </ul>
}
const Contact = ({contactTitle, contactValue}) => {
    return <div className={"contacts-box"}><b>{contactTitle}</b>: {contactValue}</div>
};
export default ProfileInfo;