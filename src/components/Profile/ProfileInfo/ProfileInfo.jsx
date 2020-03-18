import React from 'react';
import './ProfileInfo.less';

const ProfileInfo = props => {
  return (
    <div>
      <img src='https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg' />
      <div className='description-block'>
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
