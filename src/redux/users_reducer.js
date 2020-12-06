import React from "react";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = 'SET-USERS';
const SET_USER_TOTAL_COUNT = 'USER-TOTAL-COUNT';
const SET_PAGE = 'SET-PAGE';
const CHANGE_FETCHING_STATUS = 'CHANGE-FETCHING-STATUS';

let initialState = {
  users: [],
  usersPerPage: 5,
  usersCurrentPage: 1,
  usersTotalCount: 0,
  isFetching: false,
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

        case SET_PAGE:
            return {...state, usersCurrentPage: action.pageNumber}

        case CHANGE_FETCHING_STATUS:
            return {...state, isFetching: action.fetchingStatus}

        default:
            return state;

    }
};

export const setCurrentPage = (pageNumber)=>{
    return {type: SET_PAGE, pageNumber};
}
export const follow = (id) => {
    return {type: FOLLOW, userID: id};
};

export const unfollow = (id) => {
    return {type: UNFOLLOW, userID: id};
};

export const setUsers = (users) => {
    return {type: SET_USERS, users};
}

export const setUsersTotalCount = (totalCount)=>{
    return {type: SET_USER_TOTAL_COUNT, totalCount}
}

export const changeFetchingStatus = (fetchingStatus)=>{
    return {type: CHANGE_FETCHING_STATUS, fetchingStatus}
}
export default UserReducer;
