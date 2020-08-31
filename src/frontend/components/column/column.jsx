import React from "react";
import Card from "../card/card";
import { Droppable, Draggable } from 'react-beautiful-dnd';
import CardForm from "../card/card_form"

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.column.id,
      title: this.props.column.title,
      cardIds: this.props.column.cardIds,
    };
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyEscaper = this.handleKeyEscaper.bind(this)
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleKeyEscaper(e) {
    if (e.key === "Escape" || e.key === "Enter") {
      e.target.blur();
    }
  }

  handleClick(e) {
    this.props.editColumn(this.state);
  }


  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <div
            className="column-container"
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div className="column-item-header" {...provided.dragHandleProps}>
              <textarea
                className="list-name-editor"
                onBlur={this.handleClick}
                onKeyDown={this.handleKeyEscaper}
                onChange={this.update("title")}
                defaultValue={this.props.column.title}
              ></textarea>
            </div>

            <Droppable droppableId={this.props.column.id}>
              {(provided, snapshot) => (
                <div
                  className="column-card-container"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {this.props.cards.map((card, index) => (
                    <Card
                      key={card.id}
                      card={card}
                      index={index}
                      editCard={this.props.editCard}
                    />
                  ))}
                  {provided.placeholder}

                  <CardForm
                    column={this.props.column}
                    onSubmit={this.props.addCard}
                    cards={this.props.cards}
                    cardLength={Object.keys(this.props.totalCards).length + 1}
                  />
                </div>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Column;
