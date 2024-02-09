import { createStore } from "redux";

const initialState = {
  counter: 0,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return { counter: state.counter };
  }
};

const store = createStore(counterReducer);

export default store;
