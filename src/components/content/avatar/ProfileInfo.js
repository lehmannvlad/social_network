import React from "react";
import av from "./Avatar.module.css";

const ProfileInfo = () => {
  return (
    <div className={av.container}>
      <div>
        <img src="https://miro.medium.com/max/1127/1*anog7eOjWpaEpO5Kez9kjQ.jpeg"></img>
      </div>
      <div>
        <p>Name</p>
        <p>Date of birth</p>
        <p>City</p>
        <p>Website</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
