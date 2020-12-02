import React from "react";
import {
    addNewPostActionCreator,
    deletePostActionCreator,
    editPostTextActionCreator
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = () => {
//   return (
//       <StoreContext.Consumer>
//         {
//           (store) => {
//             let state = store.getState();
//
//             let addNewPost = () => {
//               store.dispatch(addNewPostActionCreator());
//             };
//
//             let editPostText = (text) => {
//               store.dispatch(editPostTextActionCreator(text));
//             };
//
//             return <MyPosts editPostText={editPostText}
//                             addNewPost={addNewPost}
//                             posts={state.profileStates.posts}
//                             postText={state.profileStates.postText}
//                             dispatch={store.dispatch.bind(store)}/>
//           }}
//       </StoreContext.Consumer>);
// };

let mapStateToProps = (state) =>{
    return {
        posts : state.profileStates.posts,
        postText: state.profileStates.postText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        editPostText: (text) => {
            dispatch(editPostTextActionCreator(text))
        },
        addNewPost: () => {
            dispatch(addNewPostActionCreator())
        },
        deletePost: (index) => {
            dispatch(deletePostActionCreator(index))
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;
