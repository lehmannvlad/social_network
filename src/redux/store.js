import ProfileReducer from "./profile_reducer";
import DialogsReducer from "./dialogs_reducer";

let store = {
  _state: {
    dialogStates: {
      friends: [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Vlad" },
        { id: 3, name: "Dima" },
        { id: 4, name: "Lena" },
        { id: 5, name: "Maxx" },
        { id: 6, name: "Alex" },
      ],
      messages: [
        { id: 1, text: "Hello" },
        { id: 2, text: "How r u?" },
        { id: 3, text: "hi" },
        { id: 4, text: "What time is it?" },
      ],
      currentMessageText: 'default message text',
    },
    profileStates: {
      posts: [
        { id: 1, text: "Very nice post!" },
        { id: 2, text: "Very bad post!" },
        { id: 3, text: "Awful post!" },
      ],
      postText: "Default post text",
    },
  },
  subscribe(observer) {
    this.rerenderNewApp = observer;
  },
  getState() {
    return this._state;
  },
  rerenderNewApp() {
    console.log("Change was saved");
  },
  dispatch(action) {
    this._state.profileStates = ProfileReducer(this._state.profileStates, action);
    this._state.dialogStates = DialogsReducer(this._state.dialogStates, action);
    this.rerenderNewApp(this._state);
  }
  };

export default store;
