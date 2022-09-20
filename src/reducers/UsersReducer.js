import { v4 as uuidv4 } from "uuid";

let initialState = {
  users: [
    {
      name: "John Cena",
      phoneNumber: "+999999",
      location: "Nima",
      id: uuidv4(),
    },
    { name: "Roman Reigns", phoneNumber: "+666666", location: "New York", id: uuidv4() },
  ],
};

let UsersReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "DELETE_USER":
      const tempUser = state.users.filter((user) => user.id !== action.payload);
      return { ...state, users: tempUser };
    case "EDIT_USER":
      const temp = state.users.map((item) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return item;
        }
      });
      return { ...state, users: temp };
    default:
      return state;
  }
};

export default UsersReducers;
