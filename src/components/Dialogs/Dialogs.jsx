import dialogs from './Dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import React from 'react';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let messageElements = state.messageData.map(message => <Message message={message.message} />)

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} image={dialog.image} />);

    let newMessageElements = React.createRef();

    let newMessageBody = state.newMessageBody;    

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChangeClick = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogItems}>
                {dialogsElements}
            </div>
            <div className={dialogs.messages}>
                {messageElements}
                <div>
                    <textarea value={newMessageBody} onChange={onNewMessageChangeClick} ref={newMessageElements}></textarea>
                    <div>
                        <button onClick={onSendMessageClick}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;