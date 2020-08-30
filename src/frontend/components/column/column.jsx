import React from "react";
import Card from "../card/card";
import { Droppable, Draggable } from "react-beautiful-dnd";

class Column extends React.Component {
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
                    <Card
                      key={card.id}
                      card={card}
                      index={index}
                      editCard={this.props.editCard}
                    />
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

export default Column;
