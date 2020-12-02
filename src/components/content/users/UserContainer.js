import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {FollowAC, UnFollowAC, UserSetterAC} from "../../../redux/users_reducer";

let mapStateToProps = (state) => {
    return {
        state: state.userStates,
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
        }
    }

}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UserContainer;