export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";
export const CLEAR_LIST_ERRORS = "CLEAR_CARD_ERRORS";

export const receiveList = (list) => ({
  type: RECEIVE_LIST,
  list,
});

export const receiveLists = (lists) => ({
  type: RECEIVE_LISTS,
  lists,
});

export const removeList = ({ list }) => ({
  type: REMOVE_LIST,
  list,
});
