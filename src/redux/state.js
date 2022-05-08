import rerenderEntireTree from "../render";

let state = {
    mainContentPage: {
        posts: [
            {id:1, message: "Hi, how are you ?", likesCount: 27},
            {id:2, message: "It's my first post", likesCount: 21},
            {id:3, message: "China, siuuuu", likesCount: 67}
        ]
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
        ]
    },
    sidebar: {
        friends: [
            {id:1, avatar:'https://mena.org.ua/wp-content/uploads/2014/03/avatar.png', name: 'Dima'},
            {id:2, avatar:'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', name: 'Andrew'},
            {id:3, avatar:'https://planbphoto.com/wp-content/uploads/Serze.jpg', name: 'Sveta'}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.mainContentPage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;