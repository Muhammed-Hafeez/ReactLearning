import { createContext, useContext } from "react";
import { useReducer } from "react";
import propTypes from "prop-types";

const Reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {count: state.count + 1};
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error(
        `Invalid case  { ${action.type} } such case does not exist`
      );
  }
};

const Context = createContext(null);
function AppState({ children }) {
  const InitialValue = { count: 0 };
  const [state, dispatch] = useReducer(Reducer, InitialValue);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
const GetContext = () => {
  return useContext(Context);
};

AppState.propTypes = {
  children: propTypes.any,
};

export { AppState, GetContext };
