import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import cardsReducer from "./cardReducer";
import columnsReducer from "./columnsReducer";
import columnOrderReducer from "./columnOrderReducer";
import counterReducer from "./counterReducer";
import resetDataReducer from "./resetDataReducer";

const rootReducer = combineReducers({
  cards: cardsReducer,
  modal: modalReducer,
  columns: columnsReducer,
  columnOrder: columnOrderReducer,
  counter: counterReducer,
  reset: resetDataReducer,
});

export default rootReducer;
