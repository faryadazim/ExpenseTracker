const AppReducer = (state, action) => {
  const newVal = action.payload;
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [...state, newVal];
    case "DELETE_TRANSACTION":
      let id = action.payload;
      const updatedAfterDeletion = state.filter((item, index) => {
        if (id !== index) {
          return item;
        }
      });
      return updatedAfterDeletion;
    default:
      return state;
  }
};

export default AppReducer;
