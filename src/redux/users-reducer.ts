import {followAPI, usersAPI} from "../api/api";
import {updateObjectsInArray} from "../utils/object-helpers";
import {UsersType} from "../types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_FETCHING= 'TOGGLE-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> // array of usersId
};
export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: updateObjectsInArray(state.users, action.userId, "id", {followed: true} )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectsInArray(state.users, action.userId, "id", {followed: false} )
            };
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default: {
            return state;
        }
    }
};

type FollowSuccessActionCreatorType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionCreatorType => ({type: FOLLOW, userId});

type UnfollowSuccessActionCreatorType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionCreatorType => ({type: UNFOLLOW, userId});

type SetUsersActionCreatorType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersActionCreatorType => ({type: SET_USERS, users});

type SetTitakUsersCountActionCreatorType = {
    type: typeof SET_TOTAL_COUNT
    count: number
}
export const setTotalUsersCount = (count: number): SetTitakUsersCountActionCreatorType => ({type: SET_TOTAL_COUNT, count});

type SetCurrentPageActionCreatorType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionCreatorType => ({type: SET_CURRENT_PAGE, currentPage});

type SetFetchingActionCreatorType = {
    type: typeof TOGGLE_FETCHING
    isFetching: boolean
}
export const setFetching = (isFetching: boolean): SetFetchingActionCreatorType => ({type: TOGGLE_FETCHING, isFetching});

type ToggleFollowingProgressActionCreatorType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    userId: number
    isFetching: boolean
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionCreatorType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(setFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(setFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
};

// FOLLOW UNFOLLOW

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);

    if(response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, followAPI.follow.bind(followAPI), followSuccess);
    }
};

export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, followAPI.unfollow.bind(followAPI), unfollowSuccess);
    }
};

export default usersReducer;