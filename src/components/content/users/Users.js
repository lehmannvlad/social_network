import React from "react";
import s from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../../assets/images/user-vector-avatar-png-image.jpg"
import Preloader from "../../common/preloader";

const Users = (props)=> {

    let pagesCount = Math.ceil(props.usersTotalCount / props.usersPerPage)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>


        <div>UserCount:{props.usersTotalCount*100}</div>

        {pages.map(p=>{
            return  <span className={props.usersCurrentPage === p && s.activePage} onClick={ ()=>props.onPageClick(p)}>{p}</span>
        })}

        {props.users.map((i) => {
            return (
                <div className={s.userClass}>
                    <div>
                        <img src={i.photos.small !== null ? i.photos.small : userPhoto}/>
                    </div>
                    <div>{i.name}</div>
                    <div>{i.status}</div>
                    {i.followed ? (
                        <button onClick={() => props.unfollow(i.id)}>Unfollow</button>
                    ) : (
                        <button onClick={() => props.follow(i.id)}>Follow</button>
                    )}
                </div>
            );
        })}</div>
}

export default Users