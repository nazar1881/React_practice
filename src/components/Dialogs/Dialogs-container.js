import React from "react";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(AuthRedirectComponent);

export default DialogsContainer;