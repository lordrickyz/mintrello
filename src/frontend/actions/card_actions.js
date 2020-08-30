export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const REMOVE_CARD = "REMOVE_CARD";

export const receiveCards = (cards) => ({
  type: RECEIVE_CARDS,
  cards,
});

export const removeCard = ({ card }) => ({
  type: REMOVE_CARD,
  card,
});
