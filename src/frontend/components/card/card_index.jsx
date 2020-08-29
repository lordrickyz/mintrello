import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";


const mstp = () => {
  return {

  }
};

const mdtp = (dispatch) => {
  return {
    openCard: () => dispatch(openModal("showCard")),
  };
};


class Card extends React.Component {
  render() {
    return (
      <>
      <button onClick={this.props.openCard}/>
      </>
    );
  }
}

export default connect(mstp, mdtp)(Card);
