import React from 'react';
import s from './users.module.css';


const Users = (props) => {
    console.log(props.state.users)
    if (props.state.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                userName: "Ivan",
                location: {country: "Ukraine", city: "Kiev"},
                bio: "Hi",
                isFollowed: true,
                avatar:
                    "https://raw.githubusercontent.com/DerkachRafael/package-test/HEAD/logo.png",
            },
            {
                id: 2,
                userName: "Nick",
                location: {country: "Belarus", city: "Minsk"},
                bio: "Salut",
                isFollowed: false,
                avatar:
                    "https://raw.githubusercontent.com/DerkachRafael/package-test/HEAD/logo.png",
            },
            {
                id: 3,
                userName: "Alex",
                location: {country: "Russia", city: "Moscow"},
                bio: "Hello",
                isFollowed: true,
                avatar:
                    "https://raw.githubusercontent.com/DerkachRafael/package-test/HEAD/logo.png",
            },
        ])

    }

    return (
        <div>
            {
                props.state.users.map(
                    (i) => {
                        return <div className={s.userClass} key={i.id}>
                            <div><img src={i.avatar}/></div>
                            <div>{i.userName}</div>
                            <div>{i.location.country}</div>
                            <div>{i.location.city}</div>
                            <div>{i.bio}</div>
                            {i.isFollowed
                                ? <button onClick={() => props.onUnFollow(i.id)}>Unfollow</button>
                                : <button onClick={() => props.onFollow(i.id)}>Follow</button>}

                        </div>
                    })
            }
        </div>
    )

}

export default Users;

