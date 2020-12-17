import React from "react";
import s from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../../assets/images/user-vector-avatar-png-image.jpg"
import Preloader from "../../common/preloader";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../../api/api";

const Users = (props) => {

    let pagesCount = Math.ceil(props.usersTotalCount / props.usersPerPage)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>


        <div>UserCount:{props.usersTotalCount * 100}</div>

        {pages.map(p => {
            return <span className={props.usersCurrentPage === p && s.activePage}
                         onClick={() => props.onPageClick(p)}>{p}</span>
        })}

        {props.users.map((i) => {
            return (
                <div className={s.userClass}>
                    <div>
                        <NavLink to={/profile/ + i.id}>
                            <img src={i.photos.small !== null ? i.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>{i.name}</div>
                    <div>{i.status}</div>
                    {i.followed ?
                        <button disabled={props.followingStatus.some(id=>id===i.id)} onClick={() => {
                            props.toggleFollowingStatus(true, i.id);
                            userAPI.unFollowUser(i.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.unfollow(i.id)
                                    }
                                props.toggleFollowingStatus(false, i.id);
                                })

                        }}>Unfollow</button>
                        :
                        <button disabled={props.followingStatus.some(id=>id===i.id)} onClick={() => {
                            props.toggleFollowingStatus(true, i.id);
                            userAPI.followUser(i.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.follow(i.id)
                                    }
                                props.toggleFollowingStatus(false, i.id);
                                })
                        }
                        }>Follow</button>
                    }
                </div>
            );
        })}</div>
}

export default Users