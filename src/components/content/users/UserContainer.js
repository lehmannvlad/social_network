import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    changeFetchingStatus, follow, setCurrentPage, setUsers, setUsersTotalCount, toggleFollowingStatus, unfollow
} from "../../../redux/users_reducer";
import * as axios from "axios";
import Preloader from "../../common/preloader";
import {userAPI} from "../../../api/api";

class UserContainer extends React.Component {
    // here constructor is not essential
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.changeFetchingStatus(true);
        userAPI.getUsers(this.props.usersCurrentPage, this.props.usersPerPage).then(data => {
            this.props.changeFetchingStatus(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount)

            }
        )
    }
    onPageClick = (pageNumber)=> {
        this.props.setCurrentPage(pageNumber)
        this.props.changeFetchingStatus(true);
        userAPI.getUsers(pageNumber,this.props.usersPerPage).then(data => {
            this.props.changeFetchingStatus(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount)

            }
        )
    }
    render() {
        return <>
            {this.props.isFetching === true ? <Preloader/> : <span>no preloader</span>}
            <Users usersTotalCount={this.props.usersTotalCount}
                      onPageClick={this.onPageClick}
                      usersPerPage={this.props.usersPerPage}
                      usersCurrentPage={this.props.usersCurrentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      toggleFollowingStatus={this.props.toggleFollowingStatus}
                      followingStatus={this.props.followingStatus}
        />
</>    }
}

let mapStateToProps = (state) => {
    return {
        users: state.userStates.users,
        usersTotalCount: state.userStates.usersTotalCount,
        usersPerPage: state.userStates.usersPerPage,
        usersCurrentPage: state.userStates.usersCurrentPage,
        isFetching: state.userStates.isFetching,
        followingStatus: state.userStates.followingStatus,
    }
}
// let mapDispatchToProps = (dispatch) => {
//        return {
//         follow : (id)=> {
//             dispatch(follow(id))
//         },
//         unfollow : (id)=> {
//             dispatch(unfollow(id))
//         },
//         setUsers: (users) =>{
//             dispatch(setUsers(users))
//         },
//         setUsersTotalCount: (totalCount) => {
//             dispatch(setUsersTotalCount(totalCount))
//         },
//         setCurrentPage: (pageNumber)=> {
//             dispatch(setCurrentPage(pageNumber))
//         },
//         changeFetchingStatus: (fetchingStatus)=>{
//             dispatch(changeFetchingStatus(fetchingStatus))
//         }
//     }
//
// }

export default connect(mapStateToProps, {changeFetchingStatus, follow,
    setCurrentPage, setUsers, setUsersTotalCount, unfollow, toggleFollowingStatus})(UserContainer);
