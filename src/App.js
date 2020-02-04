import React, {Component, Suspense, lazy} from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";

const DialogsContainer = lazy(() => import('././components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const LoginPage = lazy(() => import('./components/Login/LoginContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Sidebar/>
                <div className="content">
                    <Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Redirect exact from={"/"} to={"/profile/"} />
                            <Route exact path="/profile/:userId?" component={ProfileContainer}/>
                            <Route path="/dialogs/" component={DialogsContainer}/>
                            <Route path="/users/" component={UsersContainer}/>
                            <Route path="/login/" component={LoginPage}/>
                            <Route path="*" render={ () => <div>404 NOT FOUND</div> }/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter >
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
};

export default SamuraiJSApp;