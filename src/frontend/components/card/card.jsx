import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";

class Card extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.card.id} index={this.props.index}>

        {(provided, snapshot) => (
          <div className="card-container"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.card.title}
          </div>
        )}

      </Draggable>
    );
  }
}

export default Card

// const mstp = () => {
//   return {

//   }
// };

// const mdtp = (dispatch) => {
//   return {
//     openModal: (modal) => dispatch(openModal(modal)),
//   };
// };

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
