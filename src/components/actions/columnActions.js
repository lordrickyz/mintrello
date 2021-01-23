export const RECEIVE_COLUMNS = "RECEIVE_COLUMNS";
export const RECEIVE_COLUMN = "RECEIVE_COLUMN";
export const DELETE_COLUMN = "DELETE_COLUMN";
export const UPDATE_COLUMN = "UPDATE_COLUMN";
export const UPDATE_COLUMNS = "UPDATE_COLUMNS";

export const receiveColumns = (columns) => {
  return {
    type: RECEIVE_COLUMNS,
    columns,
  };
};
export const receiveColumn = (column) => {
  return {
    type: RECEIVE_COLUMN,
    column,
  };
};
export const deleteColumn = (column) => {
  return {
    type: DELETE_COLUMN,
    column,
  };
};
export const updateColumn = (column) => {
  return {
    type: UPDATE_COLUMN,
    column,
  };
};

export const updateColumns = (columns) => {
  return {
    type: UPDATE_COLUMNS,
    columns,
  };
};
