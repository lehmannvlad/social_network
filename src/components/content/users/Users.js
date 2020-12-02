import React from "react";
import s from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../../assets/images/user-vector-avatar-png-image.jpg"

class Users extends React.Component {
    // here constructor is not essential
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount)
            }
        )
    }

    render() {
        let pagesCount = Math.ceil(this.props.usersTotalCount / this.props.usersPerPage)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>UserCount:{this.props.usersTotalCount*100}</div>

            {pages.map(p=>{
               return  <span>{p}</span>
            })}

            {this.props.users.map((i) => {
                return (
                <div className={s.userClass}>
                    <div>
                        <img src={i.photos.small !== null ? i.photos.small : userPhoto}/>
                    </div>
                    <div>{i.name}</div>
                    <div>{i.status}</div>
                    {i.followed ? (
                        <button onClick={() => this.props.onUnFollow(i.id)}>Unfollow</button>
                    ) : (
                        <button onClick={() => this.props.onFollow(i.id)}>Follow</button>
                    )}
                </div>
            );
        })}</div>
    }
}
export default Users