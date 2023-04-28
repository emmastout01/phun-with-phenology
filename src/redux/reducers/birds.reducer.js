const birdsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_BIRDS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // birds will be on the redux state at:
  // state.birds
  export default birdsReducer;
  