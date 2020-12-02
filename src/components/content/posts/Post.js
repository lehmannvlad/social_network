import React from "react";
import p from "./Posts.module.css";
import { deletePostActionCreator } from "../../../redux/profile_reducer";
import np from "../newPost/NewPost.module.css";

const Post = (props) => {
  let onClickDeletePost = () =>
    props.dispatch(props.index);

  return (

      <div className={p.posts}>
        <img src="https://miro.medium.com/max/1127/1*anog7eOjWpaEpO5Kez9kjQ.jpeg"></img>
        {props.message}
        <button onClick={onClickDeletePost}>Delete post</button>
        <div>
          <a href="#">like icon</a>
        </div>
      </div>

  );
};
export default Post;
