import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {


    return (
      <nav className="navbar-container">
        <Link to="/">
          <h3>Mintrello</h3>
        </Link>
      </nav>
    );

  }
};

export default Navbar;



