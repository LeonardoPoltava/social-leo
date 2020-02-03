import profileReducer, {addPostCreator, deletePost} from "./profile-reducer";
import React from 'react';

let state = {
    posts: [{id:1}, {id:2}, {id:3}],
    profile: null,
    status: "",
    postsCounter: null
};

it('new post shoud be added', () => {
    // 1. test data
    let action = addPostCreator("Leonardo Test");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});
it('post shoud be deleted', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2);
});