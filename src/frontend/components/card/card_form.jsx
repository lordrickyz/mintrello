import React from "react";

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: `card-${this.props.cardLength}`,
      title: "",
      description: "",
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
    this.props.onSubmit((this.props.column),
    { id: `card-${this.props.cardLength}`,
      title: this.state.title,
      description: "",
    });

    this.setState({ 
      title: "",
   });
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

export default CardForm;
