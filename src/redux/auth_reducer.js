import React from 'react';

const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuthorized: false
}

const AuthReducer = (state = initialState, action)=>{
    switch (action.type){
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuthorized: true
            }
        default: return state;
    }
}

export const setUserAuthData = (userId, login, email) =>{
    return {type: SET_USER_AUTH_DATA, data: {userId, login, email}}
}

export default AuthReducer;