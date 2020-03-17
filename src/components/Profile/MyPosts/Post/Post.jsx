import React from 'react';
import PropTypes from 'prop-types';
import './Post.less';

const Post = props => {
  return <div>{props.message}</div>;
};

Post.propTypes = {
  message: PropTypes.string
};

export default Post;
