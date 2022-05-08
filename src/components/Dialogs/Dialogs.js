import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem avatar={dialog.avatar} name={dialog.name} id={dialog.id}/> );

    let messagesElements = props.state.messages.map( message => <Message message={message.message}/>)

    let newMessage = React.createRef();
    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
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
                        <textarea ref={newMessage}></textarea>
                        <button onClick={addMessage}>New Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;