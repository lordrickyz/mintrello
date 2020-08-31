import React from "react";
import { connect } from "react-redux";
import { closeModal } from "./modal_actions";
import CardShow from "../card/card_show";
import "./modal.css";

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case "show-card":
      component = <CardShow card={modal.item[0]} editCard={modal.item[1]} removeCard={modal.item[2]} column={modal.item[3]} />;
      break;
    default:
      return null;
  }

  return (
    <div className={`modal-background`}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

const msp = (state) => {
  return {
    modal: state.modal,
  };
};

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(Modal);
