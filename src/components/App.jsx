import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dislogs';
import './App.less';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state: { profilePage, dialogsPage } } = this.props;

    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className='app-wrapper__content'>
            <Route path='/profile' render={() => <Profile date={profilePage} />} />
            <Route path='/dialogs' render={() => <Dialogs date={dialogsPage} />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  state: PropTypes.object,
};

export default App;
