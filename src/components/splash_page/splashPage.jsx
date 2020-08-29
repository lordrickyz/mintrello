import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../nav/navbar';
import butler from '../../images/Mintrello-Butler.gif'




class SplashPage extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {


    return (

      
      <div className='splash-page-container'>
        <Navbar/>
        <img src={butler} alt="The Butler is missing :O" />


        <ul className='start-buttons-container'>
          <li><button>Recipe Tutorial</button></li>
          <li><button>Get Started</button></li>

        </ul>


        
        <footer>
          Whipped up by:
        </footer>
        </div>
    )

  }


  

};


export default SplashPage;



