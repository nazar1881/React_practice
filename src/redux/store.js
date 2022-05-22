import dialogsReducer from "./dialogs-reducer";
import main_contentReducer from "./main-content-reducer";
import side_barReducer from "./side-bar-reducer";

let store = {
    _state: {
        mainContentPage: {
            posts: [
                {id:1, message: "Hi, how are you ?", likesCount: 27},
                {id:2, message: "It's my first post", likesCount: 21},
                {id:3, message: "China, siuuuu", likesCount: 67}
            ],
            newPostText:'it-kamasutra'
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id:1, avatar:'https://mena.org.ua/wp-content/uploads/2014/03/avatar.png', name: 'Dima'},
                {id:2, avatar:'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', name: 'Andrew'},
                {id:3, avatar:'https://planbphoto.com/wp-content/uploads/Serze.jpg', name: 'Sveta'}
            ]
        }
    },

    _callSubscriber() {
        console.log('State had been changed');
    },

    getState() {
        return this._state;
    },
    
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.mainContentPage.newPostText,
            likesCount: 0
        };
        this._state.mainContentPage.posts.push(newPost);
        this._state.mainContentPage.newPostText = '';
        this._callSubscriber(this._state);
    },
    
    _updateNewPostText(newText) {
        this._state.mainContentPage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    _addNewMessageText(newMsText) {
        this._state.dialogsPage.newMessageText = newMsText;
        this._callSubscriber(this._state);
    },
    
    subscribe(observer) {
        this._callSubscriber = observer; // наглядач
    },

    dispatch(action) {
        this._state.mainContentPage = main_contentReducer(this._state.mainContentPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = side_barReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;