export const AppReducer = (state, action) => {
  ////....<<<                 Reducer Function                   >>>......////

  if (action.type === "ADD_ITEM") {
    // console.log("Na bholay na ae kam nhi krna", state, );
    const newPerson = action.payload;
    return {
      ...state,
      persons: [...state.persons, newPerson],
      isModelShow: true,
      showModelContent: "Item Added",
    };
  }
  if (action.type === "DELETE") {
    const updatedData = action.payload;
    return {
      ...state,
      persons: updatedData,
      isModelShow: true,
      showModelContent: "DELETED SUCCESSFULLY",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModelShow: true,
      showModelContent: "Empty Input_Field",
    };
  }
  if (action.type === "DELETE_ALL") {
    return {
      ...state,
        persons: [],
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModelShow: false,
    };
  }
  // return state;
  throw new Error("Tetto patian na kr  Action type not Match");
};
