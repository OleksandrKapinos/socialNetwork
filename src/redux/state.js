const SEND_MESSAGE = 'SEND-MESSAGE',
      UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT',
      ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let store = {

    // privat
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'hello!', likes: 10},
                {id: 2, message: 'fuck you!', likes: 24},
                {id: 3, message: 'gatilla fuck you!', likes: 0},
                {id: 4, message: 'hello world', likes: 30},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Pasha'},
                {id: 2, name: 'Oleg'},
                {id: 3, name: 'Artur'},
                {id: 4, name: 'Alex'}
            ],
            messages: [
                {id: 1, message: 'hello I am Pasha'},
                {id: 2, message: 'hello I am Oleg'},
                {id: 3, message: 'hello I am Artur'},
                {id: 3, message: 'hello I am Alex'}
            ],
            newMessageText: ''
        },
        navElements: {
            friends: [
                {
                    id: 1,
                    name: 'Alex',
                    url: 'https://assets.entrepreneur.com/content/1x1/300/20190429081603-ScreenShot2019-04-29at101544.png?width=100'
                },
                {
                    id: 2,
                    name: 'Vova',
                    url: 'https://qph.fs.quoracdn.net/main-thumb-4384924-100-tkqwirktjhvfvyamchxvovujueajmqiy.jpeg'
                },
                {
                    id: 3,
                    name: 'Marina',
                    url: 'https://s3-us-west-1.amazonaws.com/companies.comparably.com/23906/23906_stacy-sullivan_7721927587634.jpg'
                },
            ]
        }

    },
    _callSubscriber () {
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){

        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 1000
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';

            this._callSubscriber(this._state);
        }else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        }else if(action.type === 'SEND-MESSAGE'){

            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';

            this._callSubscriber(this._state);

        }else if(action.type === 'UPDATE-MESSAGE-TEXT'){
            this._state.dialogsPage.newMessageText = action.text;
            this._callSubscriber(this._state);
        }
    }

}

export const sendMessageActionCreator = ()=>({type: SEND_MESSAGE});

export const updateMessageText =(text)=>({type: UPDATE_MESSAGE_TEXT, text: text});

export const addPostActionCreator =()=>({type: ADD_POST});

export const updatePostTextActionCreator =(text)=>({type: UPDATE_NEW_POST_TEXT,text:text});




export default store;
// window.state = state;
