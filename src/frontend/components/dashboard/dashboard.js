import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import NewListFormContainer from "../lists/createList";
import uuid from "uuid-v4";

import Lists from "../lists/list";

function Dashboard(props) {
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      debugger;
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const [columns, setColumns] = useState(props.lists);
  debugger;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board-content">
        <Droppable
          droppableId="dashboard"
          direction="horizontal"
          type="column"
          key="dashboard"
        >
          {(provided, snapshot) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",
                  padding: 4,
                  width: "100%",
                  minHeight: 500,
                }}
              >
                {/* <Lists /> */}
                {Object.entries(columns).map(([columnId, column], index) => (
                  <Draggable draggableId={columnId} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {column.title}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};

export default connect(mapStateToProps, {})(Dashboard);
