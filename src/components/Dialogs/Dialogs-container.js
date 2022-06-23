import React from "react";
import { connect } from "react-redux";
import { sendNewMessageCreator } from "../../redux/dialogs-reducer";
import { addNewMessageText } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispathToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(addNewMessageText(text))
        },
        sendNewMessage: () => {
            dispatch(sendNewMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);

export default DialogsContainer;