import React from "react";
import {connect} from 'react-redux';
import {receiveColumn} from '../actions/columnActions';
import {updateCounter} from '../actions/counterActions';
import { openModal } from "../actions/modal_actions";

class ColumnForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveColumn({
      id: `column-${this.props.counter}`,
      title: this.state.title,
      cardIds: [],
    });
    this.props.updateCounter();
    this.setState({ title: "" });
  }

  handleReset(e){
    e.preventDefault();
    this.props.openModal("resetBoard")
  }

  render() {
    return (
      <div className="list-form-container">
        <form onSubmit={this.handleSubmit} className="list-form">
          <input
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
            className="list-input-title"
            placeholder="Enter Column Title..."
          />

          <input
            type="submit"
            value="+Add Column"
            disabled={!this.state.title}
            className="list-input-submit"
          />
        </form>
        <button className="list-input-submit" onClick={this.handleReset}>
          Reset Board!
        </button>
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
    receiveColumn: (column) => dispatch(receiveColumn(column)),
    updateCounter: () => dispatch(updateCounter()),
    openModal: () => dispatch(openModal())
  };
};

export default connect (mSTP, mDTP)(ColumnForm);
