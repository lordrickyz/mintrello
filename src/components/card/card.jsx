import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { openModal } from "../modal/modal_actions";

const mdtp = (dispatch) => {
  return {
    openShowModal: (item) => dispatch(openModal("show-card", item)),
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
                this.props.openShowModal([this.props.card, this.props.editCard, this.props.removeCard, this.props.column ])
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
