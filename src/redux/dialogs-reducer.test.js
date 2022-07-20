import dialogsReducer, { deleteMessage, sendNewMessageCreator } from "./dialogs-reducer";

let state = {
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
    ]
}

test('last message shoud be Ty petux!!!', () => {
    //1. test-data
    let action = sendNewMessageCreator("Ty petux!!!");
   
    //2. action
    let newState = dialogsReducer(state, action);

    //3. expectation
    expect(newState.messages[3].message).toBe("Ty petux!!!");
});


test('message`s count should be incremented', () => {
    //1. test-data
    let action = sendNewMessageCreator("Ty petux!!!");
   
    //2. action
    let newState = dialogsReducer(state, action);

    //3. expectation
    expect(newState.messages.length).toBe(4);
});


test('message`s count should be decremented', () => {
    //1. test-data
    let action = deleteMessage(3);
   
    //2. action
    let newState = dialogsReducer(state, action);

    //3. expectation
    expect(newState.messages.length).toBe(2);
});

test('message`s count shouldn`t be decremented if id is incorrect', () => {
    //1. test-data
    let action = deleteMessage(30098);
   
    //2. action
    let newState = dialogsReducer(state, action);

    //3. expectation
    expect(newState.messages.length).toBe(3);
});
