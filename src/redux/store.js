import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi. How are you?' },
                { id: 2, message: 'It`s my first message' }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    // observer - паттерн наблюдатель
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) { 
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;