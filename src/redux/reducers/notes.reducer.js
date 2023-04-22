const notesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_NOTES':
        return action.payload;
      default:
        return state;
    }
  };
  
  // notes will be on the redux state at:
  // state.notes
  export default notesReducer;
  