import React from "react";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = 'SET-USERS'
const SET_USER_TOTAL_COUNT = 'USER-TOTAL-COUNT'

let initialState = {
  users: [],
  usersPerPage: 5,
  usersCurrentPage: 3,
  usersTotalCount: 0,
};

const UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((item) => {
                    if (item.id === action.userID) {
                        return {...item, followed: true};
                    }
                    return item;
                }),
            };

        case UNFOLLOW: {
            let stateCopy = {...state};
            stateCopy.users = [...state.users];
            stateCopy.users.map((item) => {
                if (item.id === action.userID) {
                    item.followed = false;
                    return item;
                } else {
                    return item;
                }
            });
            return stateCopy;
        }

        case SET_USERS:
            // let stateCopy = {...state};
            // stateCopy.users = [...state.users];
            // stateCopy.users.push(...action.users);
            // return stateCopy;

            return {...state, users: [...action.users]} // <<< POTENTIAL BUG !!!

        case SET_USER_TOTAL_COUNT:
            return {...state, usersTotalCount: action.totalCount/100}

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

export const SetUsersCountAC = (totalCount)=>{
    return {type: SET_USER_TOTAL_COUNT, totalCount}
}
export default UserReducer;
