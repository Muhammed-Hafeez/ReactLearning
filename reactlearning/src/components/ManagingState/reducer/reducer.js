const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        {
          id: action.nextId,
          text: action.text,
          done: false,
        },
      ];
    }
    case "update": {
      state.map((elem) => {
        if (elem.id == action.id) {
          elem.text = action.text;
          return state;
        }
      });
      return state;
    }
    case "delete": {
      let arr = state.filter((elem) => {
        return elem.id != action.id;
      });
      return arr;
    }
    default:
      console.log("invalid case");
      break;
  }
};
export { reducer };
