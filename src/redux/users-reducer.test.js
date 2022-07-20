import usersReducer, { follow, followSuccess } from "./users-reducer";

let state = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

test('user props(followed), should be true', () => {
    //1. test-data
    let action = follow(1);
   
    //2. action
    let newState = usersReducer(state, action);

    //3. expectation
    expect(newState.users[0].followed).toBe(true);
});
