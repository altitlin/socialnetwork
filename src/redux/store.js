import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

export default {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: 'It is my first post' },
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Sasha', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png' },
        { id: 2, name: 'Pasha', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png' },
        { id: 3, name: 'Maxim', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png' },
        { id: 4, name: 'Dima', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png' },
        { id: 5, name: 'Alex', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?', },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
      ],
      newMessageBody: ''
    }
  },
  _callSubscribe() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },

  dispatch(action) {
    const { profilePage, dialogsPage } = this._state;

    this._state.profilePage = profileReducer(profilePage, action);
    this._state.dialogsPage = dialogsReducer(dialogsPage, action);

    this._callSubscribe(this._state);
  }
};
