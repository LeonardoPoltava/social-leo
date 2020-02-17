import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getLogoutUserData} from "../../redux/auth-reducer";
import {HeaderContainerType, HeaderPropsType} from "../../types/types";

class HeaderContainer extends React.Component<HeaderContainerType> {
    render() {
        return <>
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                getLogoutUserData={this.props.getLogoutUserData}
            />
        </>
    }
}
const mapStateToProps = (state: any): HeaderPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {getLogoutUserData})(HeaderContainer);