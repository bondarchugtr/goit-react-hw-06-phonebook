import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContacts, addFilter, dellContacts } from "./action";

const itemReducer = createReducer([], {
  [addContacts]: (_, action) => action.payload,
  [dellContacts]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filterReducer = createReducer("", {
  [addFilter]: (_, action) => action.payload,
});
export default combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
