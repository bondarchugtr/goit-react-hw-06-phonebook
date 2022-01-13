import { createStore } from "redux";

const reducer = (state = {}, action) => {
  console.log("sqsqss:", action);
  return state;
};

const store = createStore(reducer);

export default store;
