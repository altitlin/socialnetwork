import { createStore, combineReducers } from 'redux';
import homeReducer from './home-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsRefucer from './friends-reducer';
import profileReducer from './profile-reducer';

let reducers = combineReducers({
  homePage: homeReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsRefucer,
  profilePage: profileReducer
});

let store = createStore(reducers);

export default store;
