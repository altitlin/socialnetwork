import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import './Dialogs.less';

const Dialogs = props => {
  const { dialogs, messages, newMessageBody, updateNewMessageBody, sendMessage } = props;

  const onSendMessageClick = () => sendMessage();
  const onNewMessageChange = e => updateNewMessageBody(e.target.value);

  return (
    <div className='dialogs'>
      <div className='dialogs__items'>
        <h3 className='dialogs__items-title'>Messages</h3>
        {dialogs.map(dialog =>
          <DialogItem key={dialog.id} dialog={dialog} />)
        }
      </div>
      <div className='dialogs__messages-box'>
        <div className='dialogs__head'>
          <div className='dialogs__user-info'>
            <img src='http://gambolthemes.net/workwise-new/images/resources/m-img4.png' />
            <div className='dialogs__user-det'>
              <h3>Sasha</h3>
              <p>Online</p>
            </div>
          </div>
        </div>
        <div className="dialogs__messages">
          {messages.map(message =>
            <Message key={message.id} message={message} />)
          }
        </div>
        <div className="dialogs__footer">
          <input
            type="text"
            value={newMessageBody}
            onChange={onNewMessageChange}
            name="new-msg"
            id="new-msg"
            className='dialogs__input-text'
            placeholder='Type a message here'
          />
          <button onClick={onSendMessageClick} className='dialogs__btn'>Send</button>
        </div>
      </div>
    </div>
  );
};

Dialogs.propTypes = {
  dialogs: PropTypes.array,
  messages: PropTypes.array,
  newMessageBody: PropTypes.string,
  updateNewMessageBody: PropTypes.func,
  sendMessage: PropTypes.func
};

export default Dialogs;
