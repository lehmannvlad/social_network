import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile_reducer";
import DialogsReducer from "./dialogs_reducer";
import UserReducer from "./users_reducer";

let reducers = combineReducers({
    profileStates: ProfileReducer,
    dialogStates: DialogsReducer,
    userStates: UserReducer
});
let store = createStore(reducers);

export default store;