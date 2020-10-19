import React from 'react';

/**
 * Footer represents the footer of randomquoter
 */
function Footer(): JSX.Element {
  return (
    <footer id="footer" className="footer small bg-secondary text-white text-center" >
      <p>
        Copyright © 2020 Jan Reggie Dela Cruz and contributors.
        Project for the Front End Libraries Certification in <a href="https://www.freecodecamp.org/learn/">freeCodeCamp</a>.
      </p>
      <p>
        You may view the source code of this project over at <a href="https://github.com/janreggie/randomquoter">github.com/janreggie/randomquoter</a>.
      </p>
      <p>
        All quotes from this project have been sourced from <a href="https://github.com/lukePeavey/quotable">lukePeavey/quotable</a>.
      </p>
    </footer>
  )
}

export default Footer;