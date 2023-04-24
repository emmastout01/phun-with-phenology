const noteDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_NOTE_DETAILS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // noteDetails will be on the redux state at:
  // state.noteDetails
  export default noteDetailsReducer;
  