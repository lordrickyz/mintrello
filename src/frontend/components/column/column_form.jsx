import React from "react";
import { receiveColumn } from "../../actions/column_actions";
import { connect } from "react-redux";

class ColumnForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: `column-${this.props.nextId}`,
      title: "",
      cardIds: [],
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

    let column;

    column = Object.assign({}, this.state);
    // debugger;
    // const newState = {
    //   ...this.props.state,
    //   columns: {
    //     ...this.props.state.columns,
    //     [column.id]: column,
    //   },
    //   columnOrder: this.props.state.columnOrder.concat(column.id),
    // };
    this.props.receiveColumn(column);
    debugger;

    // localStorage.setItem("state", JSON.stringify(newState));
    debugger;
    // set localStorage.setItem stuff here
  }

  render() {
    // debugger;
    return (
      <div className="list-form-container">
        <form onSubmit={this.handleSubmit} className="list-form">
          <input
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
            className="list-input-title"
            placeholder="Enter list title..."
          />

          <input
            type="submit"
            value="Add List"
            disabled={!this.state.title}
            className="list-input-submit"
          />
        </form>
      </div>
    );
  }
}
const mDTP = (dispatch) => {
  return {
    receiveColumn: (column) => dispatch(receiveColumn(column)),
  };
};

export default connect(null, mDTP)(ColumnForm);
