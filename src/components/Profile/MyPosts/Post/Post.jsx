import React from 'react';
import PropTypes from 'prop-types';
import './Post.less';

const Post = props => {
  const { message } = props.post;

  return <div>{message}</div>;
};

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
