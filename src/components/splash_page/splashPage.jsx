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
        <img className ='butler-gif' src={butler} alt="The Butler is missing :O" />

        <div className='splash-page-main-words'>
          <h1>Mintrello</h1>
          <p>ADD SOMETHING INSPIRING HERE</p>
          <ul className='start-buttons-container'>
            <li><button>Recipe Tutorial</button></li>
            <li><button>Get Started</button></li>
          </ul>



        </div>


     


        
        <footer>
          Whipped up by: ADD NAMES HERE
        </footer>
        </div>
    )

  }


  

};


export default SplashPage;



