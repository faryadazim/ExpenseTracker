export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      const newData = action.payload;
      return [...state, newData];
    case "DELETE_TRANSACTION":
      let e = action.payload;
      let newState = state.filter((item, index) => {
        if (e !== index) {
          return item;
        }
      });
      return newState;
    default:
      return state;
  }
};
