import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {FollowAC, SetUsersCountAC, UnFollowAC, UserSetterAC} from "../../../redux/users_reducer";

let mapStateToProps = (state) => {
    return {
        users: state.userStates.users,
        usersTotalCount: state.userStates.usersTotalCount,
        usersPerPage: state.userStates.usersPerPage,
        usersCurrentPage: state.userStates.usersCurrentPage,
    }
}
let mapDispatchToProps = (dispatch) => {
       return {
        onFollow : (id)=> {
            dispatch(FollowAC(id))
        },
        onUnFollow : (id)=> {
            dispatch(UnFollowAC(id))
        },
        setUsers: (users) =>{
            dispatch(UserSetterAC(users))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(SetUsersCountAC(totalCount))
        }
    }

}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UserContainer;