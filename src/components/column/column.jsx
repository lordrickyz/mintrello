import React from "react";
import Card from "../card/card";
import { Droppable, Draggable } from 'react-beautiful-dnd';
import CardForm from "../card/card_form";
import {connect} from 'react-redux';
import {deleteColumn, updateColumn} from './../actions/columnActions';



class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.column.id,
      title: this.props.column.title,
      cardIds: this.props.column.cardIds,
    };

    this.container = React.createRef();
    // this.update = this.update.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.deleteColumn = this.deleteColumn.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (this.container.current.value !== this.props.column.title) {
      const newColumn = {
        ...this.props.column,
        title: this.container.current.value,
      };
      this.props.updateColumn(newColumn);
    }
  };


  // update(field) {
  //   return (e) => {
  //     this.setState({ [field]: e.target.value });
  //   };
  // }

  // handleClick(e) {
  //   this.props.editColumn(this.state);
  // }

  deleteColumn() {
    this.props.removeColumn(this.props.column)
  }

  render() {
    const {column, index, cards} = this.props
    return (
      <Draggable draggableId={column.id} index={index}>
        {(provided) => (
          <div
            className="column-container"
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div className="column-item-header" {...provided.dragHandleProps}>
              <textarea
                className="list-name-editor"
                ref={this.container}
                defaultValue={column.title}
              ></textarea>
            </div>

            <Droppable droppableId={column.id}>
              {(provided, snapshot) => (
                <div
                  className="column-card-container"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {column.cardIds.map((cardId, index) => (
                    <Card
                      key={cardId}
                      column={this.props.column}
                      index={index}
                      card={cards[cardId]}
                      updateColumn={this.props.updateColumn}
                    />
                  ))}
                  {provided.placeholder}

                  <CardForm
                    column={this.props.column}
                  />
                  <button className= 'remove-clmn-btn' onClick={this.deleteColumn}>
                    Remove Column
                  </button>
                </div>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
    );
  }
}

const mSTP = (state) => {
  return {
    cards: state.cards,
  };
};
const mDTP = (dispatch) => {
  return {
    removeColumn: (columnId) => dispatch(deleteColumn(columnId)),
    updateColumn: (column) => dispatch(updateColumn(column)),
  };
};

export default connect(mSTP, mDTP)(Column);
