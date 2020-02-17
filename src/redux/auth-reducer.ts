import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'social-network/auth/GET_CAPTCHA_URL';

// export type InitialStateType2 = {
//     userId: number | null
//     email: string | null
//     login: string | null
//     isAuth: boolean,
//     captchaUrl: string | null
// }
let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};
export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type){
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return {
                userIdFs: "string", // need to delete
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (
    userId: number | null , email:string | null , login: string | null , isAuth: boolean
): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {
        userId, email, login, isAuth
    }
});
export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.auth();

    if(response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const getLoginUserData = (login: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let response = await authAPI.login(login, password, rememberMe, captcha);

    if(response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    }
    else {
        if(response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages : "Error";
        dispatch(stopSubmit("login", {_error: message}));
    }
};
export const getLogoutUserData = () => async (dispatch: any) => {
    let response = await authAPI.logout();

    if(response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL,
    payload: {
        captchaUrl: string
    }
}
export const getCaptchaUrlSuccess = (captchaUrl:string): GetCaptchaUrlSuccessType => ({type: GET_CAPTCHA_URL, payload: {captchaUrl}});
export const getCaptchaUrl = () => async (dispatch: any) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
};

export default authReducer;