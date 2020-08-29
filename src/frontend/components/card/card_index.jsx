import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import "./card_index.css"


const mstp = () => {
  return {

  }
};

const mdtp = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
  };
};


class Card extends React.Component {
  constructor(props) {
    super(props);

    this.showCardContainer = this.showCardContainer.bind(this)
  }

  showCardContainer() {
    this.props.openModal("show-card");
  }

  render() {
    return (
      <>
        <button onClick={this.showCardContainer} />
      </>
    );
  }
}

export default connect(mstp, mdtp)(Card);
