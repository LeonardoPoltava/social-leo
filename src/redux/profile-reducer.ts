import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostsType, ProfileType} from "../types/types";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTOS = 'SAVE_PHOTOS';


let initialState = {
    posts: [] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: "",
    postsCounter: null as number| null,
    newPostText: ""
};
export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id: state.postsCounter,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTOS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default: {
            return state;
        }
    }
};

type AddPostCreatorActionType = {
    type: typeof ADD_POST,
    newPostText: string
}
export const addPostCreator = (newPostText: string): AddPostCreatorActionType => ({type: ADD_POST, newPostText});

type DeletePostCreatorActionType = {
    type: typeof DELETE_POST,
    postId: number
}
export const deletePost = (postId: number): DeletePostCreatorActionType => ({type: DELETE_POST, postId});

type SavePhotoSuccessCreatorActionType = {
    type: typeof SAVE_PHOTOS,
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType):SavePhotoSuccessCreatorActionType => ({type: SAVE_PHOTOS, photos});

type SetUserProfileCreatorActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileCreatorActionType => ({type: SET_USER_PROFILE, profile});

// thunk
export const getUserProfile = (userId: number) => async (dispatch:any) => {
    let response = await profileAPI.profile(userId);
    dispatch(setUserProfile(response.data));
};

type SetStatusCreatorActionType = {
    type: typeof SET_STATUS,
    status: string
}
export const setStatus = (status: string): SetStatusCreatorActionType => ({type: SET_STATUS, status});

// thunk
export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};
// thunk
export const updateStatus = (status: string) => async(dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};
// thunk
export const savePhoto = (photoFile: any) => async(dispatch: any) => {
    let response = await profileAPI.savePhoto(photoFile);
    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
// thunk
export const saveProfile = (profile: ProfileType) => async(dispatch:any, getState:any) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if(response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }
    else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;