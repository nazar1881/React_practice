import React from "react";
import { sendNewMessageCreator } from "../../redux/dialogs-reducer";
import { addNewMessageText } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(sendNewMessageCreator())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(addNewMessageText(text));
    }


    return <Dialogs updateNewMessageText={onMessageChange} sendNewMessage={addMessage} dialogsPage={state}/>
}

export default DialogsContainer;