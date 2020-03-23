const UPPDATE_NEW_MESSAGE_BODY = 'UPPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let intialState = {
  dialogs: [
    { id: 1, name: 'Sasha', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png' },
    { id: 2, name: 'Pasha', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png' },
    { id: 3, name: 'Maxim', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png' },
    { id: 4, name: 'Dima', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png' },
    { id: 5, name: 'Alex', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png' }
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?', },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
  ],
  newMessageBody: ''
};

export default (state = intialState, action) => {
  const { type } = action;

  switch (type) {
  case UPPDATE_NEW_MESSAGE_BODY:
    return {
      ...state,
      newMessageBody: action.body
    };

  case SEND_MESSAGE:
    return {
      ...state,
      newMessageBody: '',
      messages: [...state.messages, { id: 6, message: state.newMessageBody }]
    };

  default:
    return state;
  }
};

export const sendMessage = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBody = text => ({
  type: UPPDATE_NEW_MESSAGE_BODY,
  body: text
});
