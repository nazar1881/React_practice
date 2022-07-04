import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom"
import { sendNewMessageCreator } from "../../redux/dialogs-reducer";
import { addNewMessageText } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( dialog => <DialogItem avatar={dialog.avatar} name={dialog.name} id={dialog.id}/> );
    let messagesElements = state.messages.map( message => <Message message={message.message}/>)
    let newMessageText = state.newMessageText;

    let addMessage = () => {
        props.sendNewMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    if (!props.isAuth) return <Navigate to={"/login"}/>;

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div>
                        <div><textarea onChange={onMessageChange} value={newMessageText} placeholder='Enter your message'/></div>
                        <div><button onClick={addMessage}>Send</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;