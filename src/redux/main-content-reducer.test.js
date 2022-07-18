import main_contentReducer, { addPostActionCreator, deletePost } from "./main-content-reducer";

let state = {
    posts: [
        {id:1, message: "Hi, how are you ?", likesCount: 27},
        {id:2, message: "It's my first post", likesCount: 21},
        {id:3, message: "China, siuuuu", likesCount: 67}
    ]
}

test('length of posts should be incremented', () => {
    //1. test-data
    let action = addPostActionCreator("IT-kamasutra.com");
   
    //2. action
    let newState = main_contentReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(4);
});


test('message of new post should be correct', () => {
    //1. test-data
    let action = addPostActionCreator("IT-kamasutra.com");

    //2. action
    let newState = main_contentReducer(state, action);

    //3. expectation
    expect(newState.posts[3].message).toBe("IT-kamasutra.com");
});

test('element should be deleated', () => {
    //1. test-data
    let action = deletePost(1);

    //2. action
    let newState = main_contentReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(2);
});

test('length shouldn`t be decreent id if is incorrect', () => {
    //1. test-data
    let action = deletePost(100);

    //2. action
    let newState = main_contentReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});


