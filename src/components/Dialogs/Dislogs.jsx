import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import './Dialogs.less';

const Dialogs = props => {
  const { date: { dialogs, messages } } = props;

  return (
    <div className='dialogs'>
      <div className='dialogs__items'>
        {dialogs.map(dialog =>
          <DialogItem key={dialog.id} dialog={dialog} />)
        }
      </div>
      <div className='dialogs__messages'>
        {messages.map(message =>
          <Message key={message.id} message={message} />)
        }
      </div>
    </div>
  );
};

Dialogs.propTypes = {
  date: PropTypes.object
};

export default Dialogs;
