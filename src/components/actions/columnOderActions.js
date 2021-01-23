export const RECEIVE_COLUMN_ORDER = "RECEIVE_COLUMN_ORDER";
export const RECEIVE_COLUMN = "RECEIVE_COLUMN";
export const DELETE_COLUMN = "DELETE_COLUMN";

export const receiveColumnOrder = (columnOrder) => {
  return {
    type: RECEIVE_COLUMN_ORDER,
    columnOrder,
  };
};
