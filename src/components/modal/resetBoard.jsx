import React from "react"

class ResetBoard extends React.Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(e){
    e.preventDefault();

  }
  render(){
    return(
      <button onClick={this.handleClick}>
        Confirm Board Reset!
      </button>
    )
      
    
  }
}

import default ResetBoard;