export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (component, card, column) => ({
  type: OPEN_MODAL,
  modal: {
    component,
    card,
    column,
  },
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
