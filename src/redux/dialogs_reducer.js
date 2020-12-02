const ADD_MESSAGE = 'ADD-MESSAGE';
const EDIT_MESSAGE = 'EDIT-MESSAGE';

let initialState = {
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
};

const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MESSAGE:

            return {
                ...state,
                messages: [...state.messages, { id: 6, text: state.currentMessageText}],
                currentMessageText: '',
            }

        case EDIT_MESSAGE:
            return {
                ...state,
                currentMessageText: action.messageText
            };

        default:
            return state;
    }
};

export const addNewMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const editMessageActionCreator = (text) => {
    return {type: 'EDIT-MESSAGE', messageText: text};
}

export default DialogsReducer;