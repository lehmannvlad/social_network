import React from "react";
import c from "./Profile.module.css";
import ProfileInfo from "./avatar/ProfileInfo";
import MyPostsContainer from "./newPost/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={c.main}>
      <div className={c.ava}>
        <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"></img>
      </div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
