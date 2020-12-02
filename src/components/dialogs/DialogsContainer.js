import React from "react";
import {addNewMessageActionCreator, editMessageActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().dialogStates;
//         let addNewMessage = () => store.dispatch(addNewMessageActionCreator());
//         let editMessage = (text) =>
//           store.dispatch(editMessageActionCreator(text));
//
//         return (
//           <Dialogs
//             addNewMessage={addNewMessage}
//             editMessage={editMessage}
//             state={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
    return {
        state: state.dialogStates,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => dispatch(addNewMessageActionCreator()),
        editMessage: (text) => dispatch(editMessageActionCreator(text))
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
