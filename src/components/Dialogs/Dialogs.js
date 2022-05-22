import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendNewMessageCreator } from "../../redux/dialogs-reducer";
import { addNewMessageText } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem avatar={dialog.avatar} name={dialog.name} id={dialog.id}/> );

    let messagesElements = props.state.messages.map( message => <Message message={message.message}/>)

    let newMessageText = props.state.newMessageText;

    let addMessage = () => {
        props.dispatch(sendNewMessageCreator())
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(addNewMessageText(text));
    }


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