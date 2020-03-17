import React, { Component } from 'react';
import './App.less';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dislogs';
import { Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className='app-wrapper__content'>
            <Route path='/profile' component={Profile} />
            <Route path='/dialogs' component={Dialogs} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
