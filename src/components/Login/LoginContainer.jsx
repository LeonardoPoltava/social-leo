import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {getLoginUserData, getCaptchaUrl} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {
    render() {
        return <>
            <Login {...this.props} />
        </>
    }
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {getLoginUserData, getCaptchaUrl})(LoginContainer);