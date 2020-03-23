import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import DialogsContainer from '../Dialogs/DislogsContainer';
import FriendsContainer from '../Friends/FriendsContainer';

import './Main.less';

const Main = () => {
  return (
    <main className='main'>
      <Route exact={true} path='/' render={() => <Home />} />
      <Route path='/dialogs' render={() => <DialogsContainer />} />
      <Route path='/friends' render={() => <FriendsContainer />} />
    </main>
  );
};

export default Main;
