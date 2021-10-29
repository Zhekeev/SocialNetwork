import Dialogs from './Dialogs';
import React from 'react';
import {connect} from 'react-redux'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => { 
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => { 
            dispatch(sendMessageCreator())
        }
    }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer;