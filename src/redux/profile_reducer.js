const ADD_POST = 'ADD-POST';
const EDIT_POST = 'EDIT-POST';
const DELETE_POST = 'DELETE-POST';

let initialState = {
  posts: [
    { id: 1, text: "Very nice post!" },
    { id: 2, text: "Very bad post!" },
    { id: 3, text: "Awful post!" },
  ],
  postText: "Default post text",
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        text: state.postText,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        postText: "",
      };

    case EDIT_POST:
      return {
        ...state,
        postText: action.text,
      };

    default:
      return state;
  }
};

export const addNewPostActionCreator = () => ({ type: ADD_POST });

export const editPostTextActionCreator = (text) => {
  return {
    type: EDIT_POST,
    text: text,
  };
};

export const deletePostActionCreator = (index) => {
  return {
    type: DELETE_POST,
    postIndex: index,
  };
};

export default ProfileReducer;

// case
//     DELETE_POST:
//     let stateCopy = {...state};
//     stateCopy.posts = [...state.posts];
//     stateCopy.posts.splice(action.postIndex, 1);
//     return stateCopy;