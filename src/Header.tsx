import React from 'react';

function Header(): JSX.Element {
  return (
    <div id="header" className="jumbotron text-white bg-primary">
      <h1 className="display-4">Random Quote Machine</h1>
      <p className="lead">Generate random quotes out of thin air!</p>
    </div>
  )
}

export default Header;