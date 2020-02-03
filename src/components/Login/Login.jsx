import React from "react";
import "./Login.css";
import {reduxForm} from 'redux-form'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {customField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className="login-form">
            {customField("Login", "email", [required], Input, "login-form__input", {type:"email"})}
            {customField("Password", "password", [required], Input, "login-form__input", {type:"password"})}
            <div className="checkbox-box">
                {customField(null, "rememberMe", null, "input", "checkbox", {type:"checkbox", id: "remember"})}
                <label htmlFor="remember">Remember me</label>
            </div>
            {error && <div className="summary-error">
                {error}
            </div>}
            <button className="form-btn">Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.getLoginUserData(formData.email, formData.password, formData.rememberMe);
    };
    if(props.isAuth) {
        return <Redirect to={"/profile/"} />
    }
    return <div className="login">
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
export default connect()(Login);