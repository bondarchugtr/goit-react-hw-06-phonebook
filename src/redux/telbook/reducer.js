import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, setFilter, deleteContact } from "./action";

const itemReducer = createReducer([], {
  [addContact]: (state, action) => action.payload,
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
const filterReducer = createReducer("", {
  [setFilter]: (state, action) => action.payload,
});
export default combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
