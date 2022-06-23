const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'

let initialState = {
    dialogs: [
        {id:1, avatar:'https://mena.org.ua/wp-content/uploads/2014/03/avatar.png', name: 'Dima'},
        {id:2, avatar:'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', name: 'Andrew'},
        {id:3, avatar:'https://planbphoto.com/wp-content/uploads/Serze.jpg', name: 'Sveta'},
        {id:4, avatar:'https://www.meme-arsenal.com/memes/a714bdee71380a11d608c129815e5e1a.jpg', name: 'Sasha'},
        {id:5, avatar:'https://html5css.ru/howto/img_avatar.png', name: 'Victor'},
        {id:6, avatar:'https://html5css.ru/w3images/avatar2.png', name: 'Valeriy'}
    ],
    messages: [
        {id:1, message: "Hi"},
        {id:2, message: "Hi yo"},
        {id:3, message: "How are you"}
    ],
    newMessageText:''
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.newMsText
            };
        case SEND_NEW_MESSAGE:
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id:6, message: text}]
            };
        default:
            return state;
    }
}

export const sendNewMessageCreator = () => ({type: SEND_NEW_MESSAGE})
export const addNewMessageText = (text) => ({ type: ADD_NEW_MESSAGE_TEXT, newMsText: text })

export default dialogsReducer;