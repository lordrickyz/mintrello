import React from "react";
import "./tutorial.scss";
import main from "../../images/main.png";
import dragCard from "../../images/drag_card.gif";
import createList from "../../images/create_list.gif";
import dragList from "../../images/drag_lists.gif";
import editCard from "../../images/editing_card.gif";
import cardDescription from "../../images/modify_card.gif";
import createCard from "../../images/create_card.gif";
import deleteCard from "../../images/delete_card.gif";
import listTitle from "../../images/list_title.gif";
import deleteList from "../../images/remove_column.gif";

export default class Tutorial extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tutorial">
        <h1>Tutorial</h1>
        <div className="tutorial-steps">
          <div className="inner-text">
            <h3>Main Page</h3>
            <p>
              The main page starts with three lists, "To Do", "In Progress" and
              "Done"
            </p>
          </div>
          <img src={main} />
        </div>
        <div className="tutorial-steps">
          <img src={createCard} />
          <div className="inner-text">
            <h3>Creating a Card</h3>
            <p>
              To create a card simply click on the "Enter Card Title" at the
              bottom of a list and then click "Add Card"
            </p>
          </div>
        </div>
        <div className="tutorial-steps">
          <div className="inner-text">
            <h3>Creating a List</h3>
            <p>
              To create a list simply click on the "Enter List Title" to the
              right of the page and then click "Add List"
            </p>
          </div>
          <img src={createList} />
        </div>
        <div className="tutorial-steps">
          <img src={dragCard} />
          <div className="inner-text">
            <h3>Draging a Card</h3>
            <p>
              Cards can be grad from list to another by clicking on the card and
              dragging it to another list
            </p>
          </div>
        </div>
        <div className="tutorial-steps">
          <div className="inner-text">
            <h3>Draging a List</h3>
            <p>
              Lists can be dragged to a different position by clicking on the
              list and dragging them to a different place
            </p>
          </div>
          <img src={dragList} />
        </div>
        <div className="tutorial-steps">
          <img src={editCard} />
          <div className="inner-text">
            <h3>Updating a Card's Title</h3>
            <p>
              Clicking on a card will open the card for detailed information
              about a card, to modify a card just click on the text and then
              close a card
            </p>
          </div>
        </div>
        <div className="tutorial-steps">
          <div className="inner-text">
            <h3>Updating a Card's description</h3>
            <p>
              Once the card has been open, clicking on the description will let
              you type and update the description. Simply close it to keep the
              changes
            </p>
          </div>
          <img src={cardDescription} />
        </div>
        <div className="tutorial-steps">
          <img src={listTitle} />
          <div className="inner-text">
            <h3>Updating a List's Title</h3>
            <p>
              Simply clicking on a list's title and typing a different title
              will change the title of the list. As easy as it gets.
            </p>
          </div>
        </div>
        <div className="tutorial-steps">
          <div className="inner-text">
            <h3>Erasing a Card</h3>
            <p>
              Erasing a Card requires clicking on a card and then clicking on
              the erase button
            </p>
          </div>
          <img src={deleteCard} />
        </div>
        <div className="tutorial-steps">
          <img src={deleteList} />
          <div className="inner-text">
            <h3>Erasing a List</h3>
            <p>
              Simply click on the erase button at the buttom of a list to erase
              the list and all the cards inside of it
            </p>
          </div>
        </div>
        <h1>Enjoy Mintrello!</h1>
      </div>
    );
  }
}
