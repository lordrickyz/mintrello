export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (type, card) => ({
  type: OPEN_MODAL,
  modal: {
    type,
    card,
  },
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
