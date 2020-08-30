import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
// import listReducer from "./list_reducer"
// import cardReducer from "./card_reducer";

const rootReducer = combineReducers({
  lists: {},
  cards: {},
  modal: modalReducer,
})

export default rootReducer;