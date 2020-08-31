import React from "react";

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
      </div>
    );
  }
}

export default ColumnForm;
