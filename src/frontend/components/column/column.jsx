import React from 'react';
import Card from "../card/card";
import { Droppable, Draggable } from 'react-beautiful-dnd';

class Column extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.handleKeyEscaper = this.handleKeyEscaper.bind(this);
  // }

  // update(field) {
  //   return (e) => {
  //     this.setState({ [field]: e.target.value });
  //     this.setHeightOfTextarea(e.target);
  //   };
  // }

  // setHeightOfTextarea(element) {
  //   element.style.height = "inherit";
  //   element.style.height = element.scrollHeight + "px";
  // }

  // handleKeyEscaper(e) {
  //   if (e.key === "Escape" || e.key === "Enter") {
  //     e.target.blur();
  //   }
  // }

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
              {/* <textarea
                className="column-title"
                onKeyDown={this.handleKeyEscaper}
                onBlur={this.updateListTitle}
                onChange={this.update("title")}
                value={this.props.column.title}
                ref={(textAreaRef) => (this.textAreaRef = textAreaRef)}
              ></textarea> */}
              {this.props.column.title}
            </div>

            <Droppable droppableId={this.props.column.id}>
              {(provided, snapshot) => (
                <div
                  className="column-card-container"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {this.props.cards.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                  ))}
                  {provided.placeholder}
                  {/* Construct <CardForm> Here */}
                </div>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Column