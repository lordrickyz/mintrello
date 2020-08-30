import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import columnReducer from "./column_reducer";
import cardReducer from "./card_reducer";
import columnOrderReducer from "./column_order_reducer";

const rootReducer = combineReducers({
  columns: columnReducer,
  cards: cardReducer,
  modal: modalReducer,
  columnOrder: columnOrderReducer,
});

export default rootReducer;
