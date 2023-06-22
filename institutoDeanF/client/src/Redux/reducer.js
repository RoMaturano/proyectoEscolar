import { GET_ALL_STUDENTS,GET_BY_NAME } from "./actionsTypes";
const initialState = {
  students: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };

    case GET_BY_NAME:
      return {
        ...state,
        students: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
