import React from "react";
import { receiveColumn } from "../../actions/column_actions";
import { connect } from "react-redux";

class ColumnForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: `column-${this.props.columnLength}`,
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
    this.props.onSubmit({
      id: `column-${this.props.columnLength}`,
      title: this.state.title,
      cardIds: [],
    });

    this.setState({ title: "" });

    // const newState = {
    //   ...this.props.state,
    //   columns: {
    //     ...this.props.columns,
    //     [column.id]: column,
    //   },
    //   columnOrder: this.props.columnOrder.concat(`${column.id}`),
    // };

    // this.setState(newState);
    // localStorage.setItem("state", JSON.stringify(newState));
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

export default ColumnForm;
