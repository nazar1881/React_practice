import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom"
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( dialog => <DialogItem avatar={dialog.avatar} name={dialog.name} id={dialog.id}/> );
    let messagesElements = state.messages.map( message => <Message message={message.message}/>)

    const addNewMessage = (values) => {
        props.sendNewMessage(values.newMessageBody)
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
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;