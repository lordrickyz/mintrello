import React from "react";

class ColumnForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
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
    debugger;
    let column;
    this.setState({ id: `column-${this.props.nextId}`});
    column = Object.assign({}, this.state);

    const newState = {
      ...this.props.state,
      columns: {
        ...this.props.state.columns,
        [column.id]: column,
      },
      columnOrder: [...this.props.state.columnOrder].push(column)
    };

    this.setState(newState);
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

export default ColumnForm;