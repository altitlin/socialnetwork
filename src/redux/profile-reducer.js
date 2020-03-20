const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let intialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?' },
    { id: 2, message: 'It is my first post' }
  ],
  newPostText: ''
};

export default (state = intialState, action) => {
  const { type } = action;

  switch (type) {
  case ADD_POST:
    return {
      ...state,
      newPostText: '',
      posts: [...state.posts, { id: 3, message: state.newPostText }]
    };

  case UPDATE_NEW_POST_TEXT:
    return {
      ...state,
      newPostText: action.newText
    };

  default:
    return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTeactCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
