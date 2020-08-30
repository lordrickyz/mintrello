import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import uuid from "uuid-v4";
import { connect } from "react-redux";
// import createColumn from "./createColumn";
// import items from "../items";

function Columns(props) {
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

  const [columns, setColumns] = useState(props.lists);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <h1>{column.title}</h1>
            // <Draggable key={columnId} draggableId={columnId} index={index}>
            //   {(provided, snapshot) => {
            //     return (
            //       <div
            //         ref={provided.innerRef}
            //         {...provided.draggableProps}
            //         {...provided.dragHandleProps}
            //         style={{
            //           userSelect: "none",
            //           padding: 16,
            //           margin: 10,
            //           minHeight: "300px",
            //           width: "50px",
            //           backgroundColor: snapshot.isDragging ? "blue" : "red",
            //           color: "white",
            //           ...provided.draggableProps.style,
            //         }}
            //       >
            //         <textarea>{column.title}</textarea>
            //         {/* <div style={{ margin: 8 }}>
            //           <Droppable droppableId={columnId} key={columnId}>
            //             {(provided, snapshot) => {
            //               return (
            //                 <div
            //                   ref={provided.innerRef}
            //                   {...provided.draggableProps}
            //                   {...provided.dragHandleProps}
            //                 ></div>
            //               );
            //             }}
            //           </Droppable>
            //         </div> */}
            //       </div>
            //     );
            //   }}
            //   ;
            // </Draggable>
          );
        })}
        ;
      </DragDropContext>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    columns: state.columns,
  };
};

export default connect(mapStateToProps, {})(Columns);

// {/* {(provided, snapshot) => {
//   return (
//     <div
//       {...provided.droppableProps}
//       ref={provided.innerRef}
//       style={{
//         background: snapshot.isDraggingOver
//           ? "lightblue"
//           : "lightgrey",
//         padding: 4,
//         width: 250,
//         minHeight: 500,
//       }}
//     >
//       {column.items.map((item, index) => {
//         return (
//           <Draggable
//             key={item.id}
//             draggableId={item.id}
//             index={index}
//           >
//             {(provided, snapshot) => {
//               return (
//                 <div
//                   ref={provided.innerRef}
//                   {...provided.draggableProps}
//                   {...provided.dragHandleProps}
//                   style={{
//                     userSelect: "none",
//                     padding: 16,
//                     margin: "0 0 8px 0",
//                     minHeight: "50px",
//                     backgroundColor: snapshot.isDragging
//                       ? "#263B4A"
//                       : "#456C86",
//                     color: "white",
//                     ...provided.draggableProps.style,
//                   }}
//                 >
//                   {item.content}
//                 </div>
//               );
//             }}
//           </Draggable>
//         );
//       })}
//       {provided.placeholder}
//     </div>
//   );
// }} */}
