const AppReducer = (state, action) => {
  const newVal = action.payload;
  switch (action.type) {
    case "ADD_TRANSACTION":
      console.log("ADD_TRANSACTION");
      const updatedList = [...state, newVal];
      console.log(updatedList);
      return [...state, newVal];
    default:
      console.log("weee");
      return state;
  }
};

export default AppReducer;
