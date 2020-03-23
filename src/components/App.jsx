import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

import './App.less';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Main />
    </div>
  );
};

export default App;
