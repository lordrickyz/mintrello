import React from "react"
import {closeModal} from "./../actions/modal_actions"
import {connect} from 'react-redux'
import {resetData} from './../actions/resetActions'
import {
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ResetBoard extends React.Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(e){

    e.preventDefault();
    this.props.closeModal()
    this.props.resetData()

  }

  render(){
    return(
      <div className="card-show" style={{position: "relative"}}>
        <span className="card-show-close" onClick={() => this.props.closeModal()} style={{position: "absolute",right: '10px',
    top: '5px'}}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <button onClick={this.handleClick} className="show-card-delete" style={{margin: '30px 0px 40px 74px'}}>
          Confirm Board Reset!
        </button>
      </div>
    )
      
    
  }
}
const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    resetData: () => dispatch(resetData()),
  })


export default connect(null, mDTP)(ResetBoard);