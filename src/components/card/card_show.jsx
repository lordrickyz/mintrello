import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPencilAlt,
  faAlignJustify,
} from "@fortawesome/free-solid-svg-icons";
import { closeModal } from "../modal/modal_actions";

const mdtp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

class CardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.card.id,
      title: this.props.card.title,
      description: this.props.card.description,
    };
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this)
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleClick(event) {
    this.props.closeModal();
    this.props.editCard(this.state);
  }

  deleteCard() {
    this.props.removeCard(this.props.column, this.props.card)
    this.props.closeModal();
  }

  render() {
    const titleBlock = (
      <div className="card-title-container">
        <span className="card-title-icon" id="card-show-icons">
          <FontAwesomeIcon icon={faPencilAlt} />
        </span>
        <textarea
          className="card-title-editor"
          spellCheck="false"
          defaultValue={this.state.title}
          // value={this.state.title}
          onChange={this.update("title")}
        />
        <span className="card-show-close" onClick={this.handleClick}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <div className="card-show-listname">
          <p>In Column</p>
        </div>
      </div>
    );

    const descriptionBlock = (
      <div className="card-description">
        <div className="card-description-top">
          <span className="card-desc-icon" id="card-show-icons">
            <FontAwesomeIcon icon={faAlignJustify} />
          </span>
          <h3>Description</h3>
        </div>
        <textarea
          className="card-description-editor"
          defaultValue={this.state.description}
          // value={this.state.description}
          onChange={this.update("description")}
          placeholder="Click here to add a description..."
          spellCheck="false"
        ></textarea>
      </div>
    );

    return (
      <div className="card-show">
        <div className="card-show-title"> {titleBlock} </div>
        <div className="card-show-desc"> {descriptionBlock} </div>
        <button onClick={this.deleteCard}> Delete Card</button>
      </div>
    );
  }
}

export default connect(null, mdtp)(CardShow);
