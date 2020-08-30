import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";

const mdtp = (dispatch) => {
  return {
    openShowModal: (item) => dispatch(openModal("show-card", item)),
  };
};

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

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
                this.props.openShowModal([this.props.card, this.props.editCard])
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

// class Card extends React.Component {
//   constructor(props) {
//     super(props);

//     this.showCardContainer = this.showCardContainer.bind(this)
//   }

//   showCardContainer(cardId) {
//     this.props.openModal("show-card");
//   }

//   render() {
//     return (
//       <>
//         <button onClick={this.showCardContainer} />
//       </>
//     );
//   }
// }

// export default connect(mstp, mdtp)(Card);
