import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import cardsReducer from "./cardReducer";

const rootReducer = combineReducers({
  cards: cardsReducer,
  modal: modalReducer,
});

export default rootReducer;
