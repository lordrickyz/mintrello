import React from "react";
import { connect } from "react-redux";
import { updateCounter } from "../actions/counterActions";
import { receiveCard } from "../actions/cardActions";
import { updateColumn } from "../actions/columnActions";

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const newCard = {
      id: `card-${this.props.counter}`,
      title: this.state.title,
      description: "",
    };
    this.props.receiveCard(newCard);
    this.setState({
      title: "",
    });
    this.props.updateCounter();
    const newCardIds = this.props.column.cardIds.concat(newCard.id);
    const newColumn = { ...this.props.column, cardIds: newCardIds };
    this.props.updateColumn(newColumn);
  }

  render() {
    return (
      <div className="card-form-container">
        <form onSubmit={this.handleSubmit} className="card-form">
          <input
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
            className="card-input-title"
            placeholder="Enter Card Title"
          />

          <input
            type="submit"
            value="+Add Card"
            disabled={!this.state.title}
            className="card-input-submit"
          />
        </form>
      </div>
    );
  }
}
const mSTP = (state) => {
  return {
    counter: state.counter,
  };
};

const mDTP = (dispatch) => {
  return {
    updateCounter: () => dispatch(updateCounter()),
    receiveCard: (card) => dispatch(receiveCard(card)),
    updateColumn: (column) => dispatch(updateColumn(column)),
  };
};

export default connect(mSTP, mDTP)(CardForm);
