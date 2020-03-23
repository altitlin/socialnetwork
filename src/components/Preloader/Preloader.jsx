import React from 'react';

import './Preloader.less';

const Preloader = () => {
  return (
    <div className='spinner'>
      <div className='spinner__bounce spinner__bounce1'></div>
      <div className='spinner__bounce spinner__bounce2'></div>
      <div className='spinner__bounce spinner__bounce3'></div>
    </div>
  );
};

export default Preloader;
