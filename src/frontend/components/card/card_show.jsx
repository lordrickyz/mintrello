import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt, faAlignJustify} from "@fortawesome/free-solid-svg-icons";
import "./card_show.css";

class CardShow extends React.Component {
  // constructor(props) {
  //   super(props);

  // }


  render() {

    const titleBlock = (
      <div className="card-title-container">
        <span className="card-title-icon" id="card-show-icons">
          <FontAwesomeIcon icon={faPencilAlt} />
        </span>
        <textarea className="card-title-editor" spellCheck="false" />
        <div className="card-show-listname">
          <p>In Column</p>
        </div>
      </div>
    );

     const descriptionBlock = (
       <div className="card-description">
         <div className="card-description-top">
           <span className="card-desc-icon" id="card-show-icons">
             <FontAwesomeIcon icon={faAlignJustify} />
           </span>
           <h3>Description</h3>
         </div>
         <textarea
           className="card-description-editor"
           placeholder="Click here to add a description..."
           spellCheck="false"
         ></textarea>
       </div>
     );

    return (
      <div className="card-show">
        <span className="card-show-close">
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <div className="card-show-title"> {titleBlock} </div>
        <div className="card-show-desc"> {descriptionBlock} </div>
      </div>
    );
  }
}


export default CardShow;