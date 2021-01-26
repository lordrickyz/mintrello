export const RECEIVE_CARD = "RECEIVE_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const DELETE_COLUMN = "DELETE_COLUMN";
export const UPDATE_CARD = "UPDATE_CARD";

export const receiveCard = (card) => {
  return {
    type: RECEIVE_CARD,
    card,
  };
};
export const deleteCard = (cardId) => {
  return {
    type: DELETE_CARD,
    cardId,
  };
};

export const updateCard = (card) => {
  return {
    type: UPDATE_CARD,
    card,
  };
};
