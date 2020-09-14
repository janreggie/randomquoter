import React from 'react';

function Footer(): JSX.Element {
  return (
    <footer id="footer" className="footer navbar bg-secondary text-white">
      <p>
        Copyright © 2020 Jan Reggie Dela Cruz.
        Project for the Front End Libraries Certification in <a href="https://www.freecodecamp.org/learn/">freeCodeCamp</a>.
      </p>
      <p>
        You may view the source code of this project over at <a href="https://github.com/janreggie/randomquoter">github.com/janreggie/randomquoter</a>.
      </p>
      <p>
        All quotes from this project have been sourced from <a href="https://en.wikiquote.org/wiki/Main_Page">Wikiquote</a>.
        Content is available under <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>
      </p>
    </footer>
  )
}

export default Footer;