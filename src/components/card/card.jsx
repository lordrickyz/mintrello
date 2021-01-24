import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { openModal } from "./../actions/modal_actions";

const mdtp = (dispatch) => {
  return {
    openShowModal: (card) => dispatch(openModal("show-card", card)),
  };
};

class Card extends React.Component {

  render() {
    return (
      <Draggable draggableId={this.props.card.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            className="card-container"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div
              onClick={() =>
                this.props.openShowModal(this.props.card)
              }
            >
              <span id={"card-item-title"}>{this.props.card.title}</span>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default connect(null, mdtp)(Card);
