import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {getLoginUserData} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {
    render() {
        return <>
            <Login {...this.props} />
        </>
    }
}
const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {getLoginUserData})(LoginContainer);