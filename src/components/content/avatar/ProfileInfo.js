import React from "react";
import av from "./Avatar.module.css";
import Preloader from "../../common/preloader";
import photo from "../../../assets/images/user-vector-avatar-png-image.jpg"

const ProfileInfo = (props) => {
  if (!props.profile){
      return <Preloader/>
  }
    return (
    <div className={av.container}>
      <div>
        <img src={props.profile.photos.small==true?props.profile.photos.small: photo}></img>
      </div>
      <div>
        <p>Name: {props.profile.fullName}</p>
        <p>About: {props.profile.aboutMe}</p>
        <p><a href={props.profile.contacts.vk}>VK</a></p>
        <p>Website</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
