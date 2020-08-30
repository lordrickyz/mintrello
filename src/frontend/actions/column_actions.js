export const RECEIVE_COLUMNS = "RECEIVE_COLUMN";
export const REMOVE_COLUMN = "REMOVE_COLUMN";

export const receiveColumn = (columns) => ({
  type: RECEIVE_COLUMNS,
  columns,
});

export const removeColumn = ({ column }) => ({
  type: REMOVE_COLUMN,
  column,
});
