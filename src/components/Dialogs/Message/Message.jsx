import React from 'react';
import PropTypes from 'prop-types';
import './Message.less';

const Message = props => {
  const { message } = props.message;

  return (
    <div className="dialogs__message">
      {message}
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.object
};

export default Message;
