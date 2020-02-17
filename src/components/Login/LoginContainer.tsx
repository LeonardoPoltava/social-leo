import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {getLoginUserData, getCaptchaUrl} from "../../redux/auth-reducer";
import {LoginContainerProps} from "../../types/types";

class LoginContainer extends React.Component<LoginContainerProps> {
    render() {
        return <>
            <Login
                captchaUrl={this.props.captchaUrl}
                login={this.props.login}
                isAuth={this.props.isAuth}
            />
        </>
    }
}
const mapStateToProps = (state: any) => ({
    captchaUrl: state.auth.captchaUrl,
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {getLoginUserData, getCaptchaUrl})(LoginContainer);