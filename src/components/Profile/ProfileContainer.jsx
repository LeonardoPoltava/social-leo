import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getStatus, updateStatus, savePhoto} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainerAPI extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.currentUserId;
            if(!userId) {
                this.props.history.push("/login/");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile savePhoto={this.props.savePhoto} isOwner={!this.props.match.params.userId} {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        currentUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter
) (ProfileContainerAPI);