import React from "react"
import {closeModal} from "./../actions/modal_actions"
import {connect} from 'react-redux'
import {resetData} from './../actions/resetActions'

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
      <button onClick={this.handleClick}>
        Confirm Board Reset!
      </button>
    )
      
    
  }
}
const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    resetData: () => dispatch(resetData()),
  })


export default connect(null, mDTP)(ResetBoard);