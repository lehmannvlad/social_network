import React from "react";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = 'SET-USERS'

let initialState = {
  users: []
};

const UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((item) => {
                    if (item.id === action.userID) {
                        return {...item, isFollowed: true};
                    }
                    return item;
                }),
            };

        case UNFOLLOW: {
            let stateCopy = {...state};
            stateCopy.users = [...state.users];
            stateCopy.users.map((item) => {
                if (item.id === action.userID) {
                    item.isFollowed = false;
                    return item;
                } else {
                    return item;
                }
            });
            return stateCopy;
        }

        case SET_USERS:
            return {...state, users: [...action.users]}
        default:
            return state;
    }
};

export const FollowAC = (id) => {
    return {type: FOLLOW, userID: id};
};

export const UnFollowAC = (id) => {
    return {type: UNFOLLOW, userID: id};
};

export const UserSetterAC = (users) => {
    return {type: SET_USERS, users};
}

export default UserReducer;
