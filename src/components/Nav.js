import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const Nav = props => {
  const { brand, button } = props;
  return (
    <div className="nav">
      <h3>{brand}</h3>
      <a href="/">{button}</a>
    </div>
  );
};

Nav.propTypes = {
  brand: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired
};

export default Nav;
