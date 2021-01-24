import React from "react";
import Column from "../column/column";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import ColumnForm from "../column/column_form";
import Navbar from "../nav/navbar";
import {receiveColumnOrder} from './../actions/columnOrderActions'
import {updateColumn, updateColumns} from './../actions/columnActions'

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.data;
    // localStorage.setItem("state", JSON.stringify(this.state));
  }
  // JSON.parse(localStorage.getItem('state'))

  // Adding Columns
  // addColumn = (column) => {
  //   const newState = {
  //     ...this.state,
  //     columns: {
  //       ...this.state.columns,
  //       [column.id]: column,
  //     },
  //     columnOrder: this.state.columnOrder.concat(column.id),
  //   };
  //   this.setState(newState);
  //   localStorage.setItem("state", JSON.stringify(newState));
  // };

  // editColumn = (column) => {
  //   const newState = {
  //     ...this.state,
  //     columns: {
  //       ...this.state.columns,
  //       [column.id]: column,
  //     },
  //   }

  //   this.setState(newState);
  //   localStorage.setItem("state", JSON.stringify(newState));
  // }

  // removeColumn = (column) => {
  //   const newOrder = this.state.columnOrder.filter(item => item !== column.id)
  //   let newColumns = Object.assign({}, this.state.columns);
  //   delete newColumns[column]

  //   const newState = {
  //     ...this.state,
  //     columns: newColumns,
  //     columnOrder: newOrder,
  //   };
  //   this.setState(newState);
  //   localStorage.setItem("state", JSON.stringify(newState));
  // }

  // // Adding Cards
  // addCard = (column, card) => {
  //   const newState = {
  //     ...this.state,
  //     cards: {
  //       ...this.state.cards,
  //       [card.id]: card,
  //     },
  //     columns: {
  //       ...this.state.columns,
  //       [column.id]: {
  //         ...column,
  //         cardIds: this.state.columns[column.id].cardIds.concat(card.id),
  //       },
  //     },
  //   };

  //   this.setState(newState);
  //   localStorage.setItem("state", JSON.stringify(newState));
  // };

  // editCard = (card) => {
  //   const newState = {
  //     ...this.state,
  //     cards: {
  //       ...this.state.cards,
  //       [card.id]: card,
  //     },
  //   }

  //   this.setState(newState);
  //   localStorage.setItem("state", JSON.stringify(newState));
  // }

  // removeCard = (column, card) => {
  //   let cardId = card.id, columnId = column.id;

  //   let newCards = Object.assign({}, this.state.cards);
  //   delete newCards[card]

  //   const newCardIds = this.state.columns[columnId].cardIds.filter(item => item !== cardId)

  //   const newState = {
  //     ...this.state,
  //     cards: newCards,
  //     columns: {
  //       ...this.state.columns,
  //       [columnId]: {
  //         ...column,
  //         cardIds: newCardIds,
  //       }
  //     },
  //   };
  //   this.setState(newState);
  //   localStorage.setItem("state", JSON.stringify(newState));
  // }

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
      // const newState = {
      //   ...this.state,
      //   columnOrder: newColumnOrder,
      // };
      // this.setState(newState);
      // localStorage.setItem("state", JSON.stringify(newState));
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
      // const newState = {
      //   ...this.state,
      //   columns: {
      //     ...this.state.columns,
      //     [newColumn.id]: newColumn,
      //   },
      // };

      // this.setState(newState);
      // localStorage.setItem("state", JSON.stringify(newState));
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
    // const newState = {
    //   ...this.state,
    //   columns: {
    //     ...this.state.columns,
    //     [newStart.id]: newStart,
    //     [newFinish.id]: newFinish,
    //   },
    // };

    // this.setState(newState);
    // localStorage.setItem("state", JSON.stringify(newState));
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
                  // const column = this.state.columns[columnId];
                  // const cards = column.cardIds.map(
                  //   (cardId) => this.state.cards[cardId]
                  // );

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
