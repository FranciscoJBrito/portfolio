import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_PROJECT_0":
      return { id: 0, isOpen: true };
    case "OPEN_PROJECT_1":
      return { id: 1, isOpen: true };
    case "OPEN_PROJECT_2":
      return { id: 2, isOpen: true };
    case "CLOSE_PROJECT":
      return { id: null, isOpen: false };
    default:
      return state;
  }
}

export const usePopupManager = () => {
  const [projectState, dispatch] = useReducer(reducer, "CLOSE_PROJECT");

  return { projectState, dispatch };
};
