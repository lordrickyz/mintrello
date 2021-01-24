import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import cardsReducer from "./cardReducer";
import columnsReducer from "./columnsReducer";
import columnOrderReducer from "./columnOrderReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  cards: cardsReducer,
  modal: modalReducer,
  columns: columnsReducer,
  columnOrder: columnOrderReducer,
  counter: counterReducer,
});

export default rootReducer;
