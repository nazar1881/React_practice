import { authMe } from "./auth-reducer";

const INITIALIZED_SUCCESSED = 'INITIALIZED_SUCCESSED';

let initialState = {
    initialiazed: false,
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESSED:
            return {
                ...state,
                initialiazed: true,
            };
        default:
            return state;
    }  
}

export const initialiazedSuccessed = () => ({ type: INITIALIZED_SUCCESSED });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());
    
    promise.then(() => {
        dispatch(initialiazedSuccessed());
    })
}

export default appReducer;