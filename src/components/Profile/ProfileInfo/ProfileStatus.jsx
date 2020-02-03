import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };
    onStatusChange =  (event) => {
        this.setState({status: event.target.value});
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render(props) {
        return <div>
            {!this.state.editMode && <span onDoubleClick={this.activateEditMode} className="profile-status">{this.props.status || "No status"}</span>}
            {this.state.editMode &&
            <input
                autoFocus={true}
                onChange={this.onStatusChange}
                onBlur={this.deactivateEditMode}
                type="text"
                value={this.state.status}
                className="profile-status-input"
            />}
        </div>
    }
}
export default ProfileStatus;