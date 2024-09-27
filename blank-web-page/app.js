const globalState = {
  NorthSouth: "North",
  CarsAreWaiting: false,
  time: 30,
};

let initialState = { ...globalState };

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_DIRECTION":
      return {
        ...state,
        NorthSouth: state.NorthSouth === "North" ? "South" : "North",
      };
    case "TOGGLE_WAITING":
      return {
        ...state,
        CarsAreWaiting: !state.CarsAreWaiting,
      };
    case "CHANGE_TIME":
      return {
        ...state,
        time: action.payload,
      };
    default:
      return state;
  }
};

const dispatch = (action) => {
  initialState = reducer(initialState, action);
  return initialState;
};

const nextState1 = dispatch({ type: "CHANGE_DIRECTION" });
console.log("nextState1", nextState1);

const nextState2 = dispatch({ type: "TOGGLE_WAITING" });
console.log("nextState2", nextState2);

const nextState3 = dispatch({ type: "CHANGE_TIME", payload: 45 });
console.log("nextState3", nextState3);

console.log("globalState", globalState);
