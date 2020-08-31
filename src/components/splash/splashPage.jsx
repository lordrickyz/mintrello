import React from 'react';
import Navbar from '../nav/navbar';
import butler from "../../images/Mintrello-Butler.gif";
import splashImageOne from '../../images/splashfiller1.png';
import splashImageTwo from '../../images/splashfiller2.png';
import butlerPocket from '../../images/buter-pocket.jpg';
// import { Link } from 'react-router-dom';

class SplashPage extends React.Component {

  render() {
    
    return (
      <div className='splash-page-container'>
        <header><Navbar/></header>
        <div className='splash-page-top'>
          <img className ='butler-gif' src={butler} alt="The Butler is missing :O" />
          <div className='splash-page-main-words'>
            <h1>Mintrello</h1>
            <p>Keep project planning sweet and simple</p>
            <ul className='start-buttons-container'>
              <li><button className='left-start-btn'>Tutorial</button></li>
              <li><a href="#/dashboard"><button className='right-start-btn'>Get Started</button></a></li>
            </ul>
          </div>
        </div>
        <ul className='splash-page-body'>
          <li>
            <h1>Track
              <br />
              <p>With Mintrello you don't have to worry about losing track of project status. 
                  Keep up on current tasks with Mintrello's project board. Break up projects in to smaller pieces with cards. </p>
            </h1>
            
            <img src={splashImageOne} alt="I'm missing :O" />
          </li>
          <li>
          <h1>Complete
            <br />
              <p>Complete, delete, forget. 
                Mintrello's emphasis on a minimalist structure ensures the only visible projects are the ones you still need to complete.

              </p>
          </h1>
          <img src={splashImageTwo} alt="I'm missing :O" />


          </li>
          <li>
          <h1>Take anywhere
            <br />
              <p>With Mintrello you keep track of projects on your PC or your mobile. 
                Mintrello's design ensures a clean interface no matter your screen size.   </p>
          </h1>
          <img className='butler-pocket' src={butlerPocket} alt="I'm missing :O" />


          </li>
        </ul>
        {/* <div className='second-test-footer'>
          Whipped up by
        </div> */}




        <footer>
          Whipped up by: Carl Godlewski, Louis Velazquez, and Ricky Zheng for the Mintbean Hackathon
        </footer>
      </div>
    )

  }


  

};


export default SplashPage;
