import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import columnReducer from "./column_reducer";
import cardReducer from "./card_reducer";

const rootReducer = combineReducers({
  columns: columnReducer,
  cards: cardReducer,
  modal: modalReducer,
});

export default rootReducer;
