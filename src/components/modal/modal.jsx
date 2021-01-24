import React from "react";
import { connect } from "react-redux";
import { closeModal } from './../actions/modal_actions'
import CardShow from "../card/card_show";
import ResetBoard from "./resetBoard"
import "./modal.css";

const Modal = ({ modal, card }) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case "show-card":
      component = <CardShow card={modal.card} />;
      break;
    case "resetBoard":
      component = <ResetBoard />
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
