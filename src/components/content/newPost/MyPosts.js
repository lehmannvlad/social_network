import React from "react";
import np from "./NewPost.module.css";
import {addNewPostActionCreator, editPostTextActionCreator} from "../../../redux/profile_reducer";
import Post from "../posts/Post";

const MyPosts = (props) => {



    let addedPosts = props.posts.map(
        (p, i) => <Post message={p.text} index={i}/>);


  let newPost = React.createRef();

  let onEditPostText = () => {

      props.editPostText(newPost.current.value);
  };

  let onAddNewPost = () => {
    props.addNewPost();
  };

  let onDeletePost = (index) => {
      props.deletePost(index);
    };

  return (
    <div className={np.newpost}>
      <textarea
        onChange={onEditPostText}
        ref={newPost}
        type="text"
        size="40"
        value={props.postText}
      />
      <button onClick={onAddNewPost}>Add post</button>
        {addedPosts}
    </div>
  );
};

export default MyPosts;
