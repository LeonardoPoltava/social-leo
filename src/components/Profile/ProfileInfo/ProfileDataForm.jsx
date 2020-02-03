import React from "react";
import {reduxForm} from "redux-form";
import {customField, Input, Textarea} from "../../common/FormsControls/FormsControls";

export const ProfileDataForm = ({profile, handleSubmit}) => {
    return <form onSubmit={handleSubmit} className="profile-info-list">
        <li className={"profile-info-list__elem"}>
            <button type={"submit"}>Save</button>
        </li>
        <li className={"profile-info-list__elem"}>
            <b>Looking for a job</b>: { customField("", "lookingForAJob", [], Input, "", {type: "checkbox"} )}
        </li>
        {profile.lookingForAJob && // Если Ищу работу равно тру
        <li className={"profile-info-list__elem"}>
            <b>My professional skills</b>: { customField("", "lookingForAJobDescription", [], Textarea )}
        </li>
        }
        <li className={"profile-info-list__elem"}>
            <b>About me:</b> { customField("", "aboutMe", [], Input, "")}
        </li>
        <li className={"profile-info-list__elem"}>
            <b>Contacts:</b>
        </li>
    </form>
};
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;