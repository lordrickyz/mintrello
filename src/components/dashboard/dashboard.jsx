import React from "react";
import Column from "../column/column";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import ColumnForm from "../column/column_form";
import Navbar from "../nav/navbar";
import {receiveColumnOrder} from './../actions/columnOrderActions'
import {updateColumn, updateColumns} from './../actions/columnActions'
import initalData from './../../initial_data'

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  // Drag and Drop Function
  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(this.props.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      this.props.receiveColumnOrder(newColumnOrder);
      return;
    }

    const start = this.props.columns[source.droppableId];
    const finish = this.props.columns[destination.droppableId];

    if (start === finish) {
      const newCardIds = Array.from(start.cardIds);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        cardIds: newCardIds,
      };
      this.props.updateColumn(newColumn)
      return;
    }

    //Moving from one list to another
    const startCardIds = Array.from(start.cardIds);
    startCardIds.splice(source.index, 1);
    const newStart = {
      ...start,
      cardIds: startCardIds,
    };

    const finishCardIds = Array.from(finish.cardIds);
    finishCardIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      cardIds: finishCardIds,
    };
    this.props.updateColumns([newStart, newFinish])
  };


  render() {
    return (
      <div>
      <header className='dashboard-nav'><Navbar/></header>
      <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
          >
            {(provided) => (
              <div
                className="dashboard-container"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {this.props.columnOrder.map((columnId, index) => {
                  return (
                    <Column
                      key={columnId}
                      column={this.props.columns[columnId]}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}

                <ColumnForm
                  counter={this.props.counter}
                />
              </div>
            )}
          </Droppable>
      </DragDropContext>
      </div>
    );
  }
}


const mSTP = (state) => {
  if(state.reset){
    state = initalData
    localStorage.removeItem("mintrello");
    window.location.reload();
  }
  localStorage.setItem("mintrello", JSON.stringify(state));
  return {
    columnOrder: state.columnOrder,
    columns: state.columns,
    counter: state.counter,
  };
};

const mDTP = (dispatch) => {
  return {
    receiveColumnOrder: (columnOrder) =>
    dispatch(receiveColumnOrder(columnOrder)),
    updateColumn: (column) => dispatch(updateColumn(column)),
    updateColumns: (columns) => dispatch(updateColumns(columns)),
  };
}


export default connect(mSTP, mDTP)(DashBoard);
