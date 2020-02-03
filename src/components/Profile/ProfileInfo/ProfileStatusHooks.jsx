import React, {useState, useEffect} from "react";

const ProfileStatusHooks = (props) => {
    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onStatusChange =  (event) => {
        setStatus(event.currentTarget.value);
    };

    return (
        <div>
            {!editMode && <span onDoubleClick={activateMode} className="profile-status">{props.status || "No status"}</span>}
            {editMode &&
            <input
                autoFocus={true}
                onChange={onStatusChange}
                onBlur={deactivateEditMode}
                type="text"
                value={status}
                className="profile-status-input"
            />}
        </div>
    )
}
export default ProfileStatusHooks;