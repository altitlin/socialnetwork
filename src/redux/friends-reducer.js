const intialState = {
  friends: [
    { id: 1, name: 'Pasha', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png', location: { city: 'Russia', country: 'Moscow' } },
    { id: 2, name: 'Pasha', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png', location: { city: 'Russia', country: 'Ryazan' } },
    { id: 3, name: 'Maxim', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png', location: { city: 'Russia', country: 'Piter'  } },
    { id: 4, name: 'Alex', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png', location: { city: 'Russia', country: 'Samara'  } }
  ]
};

export default (state = intialState, action) => {
  const { type } = action;

  switch (type) {
  case type:

    break;

  default:
    return state;
  }
};
