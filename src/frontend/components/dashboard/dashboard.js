import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import NewListFormContainer from "../lists/createList";
import uuid from "uuid-v4";

import Lists from "../lists/list";

function Dashboard() {
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

  // const [lists, setLists] = useState(this.props.lists);

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <div className="board-content">
        <Droppable droppableId={`dashboard`} key={"dashboard"}>
          {(provided, snapshot) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                // style={{
                //   background: snapshot.isDraggingOver
                //     ? "lightblue"
                //     : "lightgrey",
                //   padding: 4,
                //   width: 250,
                //   minHeight: 500
                // }}
              >
                <Lists />
              </div>
            );
          }}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default Dashboard;
