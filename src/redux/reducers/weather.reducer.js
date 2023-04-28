const weatherReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_WEATHER':
        return action.payload;
      case 'CLEAR_WEATHER':
        return {};
      default:
        return state;
    }
  };
  
  // weather will be on the redux state at:
  // state.weather
  export default weatherReducer;
  