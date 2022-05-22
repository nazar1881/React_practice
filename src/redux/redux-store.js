import {combineReducers, legacy_createStore as createStore} from "redux";
import main_contentReducer from "./main-content-reducer";
import dialogsReducer from "./dialogs-reducer";
import side_barReducer from "./side-bar-reducer"

let reducers = combineReducers({
    mainContentPage: main_contentReducer,
    dialogsPage: dialogsReducer,
    sidebar: side_barReducer
});

let store = createStore(reducers);

export default store;