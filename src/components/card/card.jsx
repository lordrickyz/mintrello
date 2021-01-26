import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { openModal } from "./../actions/modal_actions";

const mdtp = (dispatch) => {
  return {
    openModal: (card, column) => dispatch(openModal("show-card", card, column)),
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
                this.props.openModal(this.props.card, this.props.column)
              }

              id={"card-click-container"}
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
