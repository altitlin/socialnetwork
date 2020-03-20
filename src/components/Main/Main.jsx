import React from 'react';
import { Route } from 'react-router-dom';
import Profile from '../Profile/Profile';
import DialogsContainer from '../Dialogs/DislogsContainer';
import './Main.less';
import Friends from '../Friends/Friends';

const Main = () => {
  return (
    <main className='main'>
      <Route path='/profile' render={() => <Profile />} />
      <Route path='/dialogs' render={() => <DialogsContainer />} />
      <Route path='/friends' render={() => <Friends />} />
    </main>
  );
};

export default Main;
