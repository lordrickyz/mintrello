import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import cardsReducer from "./cardReducer";
import columnsReducer from "./columnsReducer";
import columnOrderReducer from "./columnOrderReducer";

const rootReducer = combineReducers({
  cards: cardsReducer,
  modal: modalReducer,
  columns: columnsReducer,
  columnOrder: columnOrderReducer,
});

export default rootReducer;
