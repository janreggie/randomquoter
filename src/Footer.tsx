import React from 'react';

function Footer(): JSX.Element {
  return (
    <footer id="footer" className="footer navbar bg-secondary text-white fixed-bottom">
      <p>
        Copyright © 2020 Jan Reggie Dela Cruz.
        Project for the Front End Libraries Certification in <a href="https://www.freecodecamp.org/learn/">freeCodeCamp</a>.
      </p>
      <p>
        You may view the source code of this project over at <a href="https://github.com/janreggie/randomquoter">github.com/janreggie/randomquoter</a>.
      </p>
    </footer>
  )
}

export default Footer;