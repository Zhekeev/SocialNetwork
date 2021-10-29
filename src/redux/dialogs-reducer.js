const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
        messageData: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'You' }
        ],
        dialogsData: [
            { id: 1, name: 'Eric Cartman', image: 'https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png' },
            { id: 2, name: 'Stan Marsh', image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/9e/Stan.png/264px-Stan.png' },
            { id: 3, name: 'Kyle Broflovski', image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4b/Kyle2.jpg/274px-Kyle2.jpg' },
            { id: 4, name: 'Kenny McCormic', image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/42/Kenny-sp.jpg/274px-Kenny-sp.jpg' }
        ],
        newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.body
            };    
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,    
                newMessageBody: '',
                messageData: [...state.messageData, {id: 6, message: body}]
            };
        default: 
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;