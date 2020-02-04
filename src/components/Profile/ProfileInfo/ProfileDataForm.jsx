import React from "react";
import {reduxForm} from "redux-form";
import {customField, Input, Textarea} from "../../common/FormsControls/FormsControls";

export const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit} className="profile-info-list">
        <div className={"profile-info-list__elem flex"}>
            <button className={"profile-btn"} type={"submit"}>Save</button>
        </div>
        {error && <div className={"summary-error"}>
            {error}
        </div>
        }
        <div className={"profile-info-list__elem flex-center-y"}>
            <b>Looking for a job:</b> { customField("", "lookingForAJob", [], Input, "", {type: "checkbox"} )}
        </div>
        <div className={"profile-info-list__elem flex"}>
            <b>My professional skills:</b> { customField("My professional skills", "lookingForAJobDescription", [], Textarea )}
        </div>
        <div className={"profile-info-list__elem flex"}>
            <b>About me:</b> { customField("About me", "aboutMe", [], Input, "")}
        </div>
        <div className={"profile-info-list__elem flex"}>
            <b>Contacts:</b>
            {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={"flex contacts-col"}>
                <b className={"title-sm"}>{key}:</b> {customField(key, "contacts." + key, [], Input)}
            </div>
            })}
        </div>
    </form>
};
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;