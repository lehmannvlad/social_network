import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile_reducer";
import DialogsReducer from "./dialogs_reducer";
import UserReducer from "./users_reducer";
import AuthReducer from "./auth_reducer";

let reducers = combineReducers({
    profileStates: ProfileReducer,
    dialogStates: DialogsReducer,
    userStates: UserReducer,
    auth: AuthReducer,
});
let store = createStore(reducers);

export default store;