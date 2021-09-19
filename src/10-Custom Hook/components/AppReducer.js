export const AppReducer = (state, action) => {
  // switch (action.type === 'ADD_ITEM') {
  //   case value:
  //     break;

  //   default:
  //     break;
  // }

  if (action.type === "ADD_ITEM") {
    let name = action.payload;
    const UpdatedPerson = { id: name.id, ...name };
    return {
      persons: [...state.persons, UpdatedPerson],
      isModalOpen: true,
      modelContent: "User Added",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      persons: [...state.persons],
      isModalOpen: true,
      modelContent: "Please Enter Name",
    };
  }

  if (action.type === "REMOVAL_MODAL") {
    return {
      persons: state.persons,
      isModalOpen: false,
      modelContent: "",
    };
  }
  if (action.type === "DELETE") {
    const em = action.payload;
    const updatedPersons = state.persons.filter((user) => {
      if (user.id !== em) {
        return user;
      }
    });
    return {
      persons: updatedPersons,
      isModalOpen: true,
      modelContent: "Deleted SuccessFully",
    };
  }
  if (action.type === "DELETE_ALL") {
    return {
      persons: [],
      isModalOpen: "true",
      modelContent: "Delted All",
    };
  }

  throw new Error("Error : No Value Match");
};
