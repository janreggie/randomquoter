import React from 'react'
import { Quote } from './Quote'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * QuoteContainer is the React component used to display and generate quotes.
 */
class QuoteContainer extends React.Component {

  state: { quote: Quote }

  constructor(props: object) {
    super(props)
    this.state = {
      quote: {
        Text: "Press New Quote to generate",
        Author: "Press New Quote"
      }
    }
    this.generateQuote = this.generateQuote.bind(this)
  }

  /**
   * generateQuote generates a random quote and puts it to state.
   * It fetches from the quotable API.
   */
  generateQuote() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: {
            Text: data.content,
            Author: data.author
          }
        })
      })
      .catch(_ => {
        this.setState({
          quote: {
            Text: "Could not fetch quote. Try again.",
            Author: "Press New Quote"
          }
        })
      })
    this.setState({
      quote: {
        Text: "Fetching data...",
        Author: "Fetching data..."
      }
    })
  }

  /**
   * render renders the QuoteContainer to the foreground.
   */
  render(): JSX.Element {
    return (
      <div id="quote-box-container" style={{ minHeight: "50vh" }}>
        <div className="card border-primary mx-auto bg-light" id="quote-box">
          <div className="card-body h-50" >
            <QuoteBox quote={this.state.quote} />
            <div className="list-inline">
              <NewQuote generator={this.generateQuote} />
              <TweetQuote quote={this.state.quote} />
            </div>
          </div>
        </div>
      </div >
    )
  }
}

/**
 * QuoteBox displays a quote.
 */
const QuoteBox = ({ quote } : { quote : Quote }) => (
  <blockquote className="blockquote" id="quote">
    <p id="text">{quote.Text}</p>
    <footer className="blockquote-footer" id="author-context">
      <span id="author">{quote.Author}</span>
    </footer>
  </blockquote>
)

/**
 * NewQuote generates a new quote from a `generator` procedure
 */
const NewQuote = ({ generator } : { generator: () => void }) => (
  <li className="list-inline-item">
    <button id="new-quote" className="list-inline-item btn btn-primary" onClick={generator}>New Quote</button>
  </li>
)

/**
 * TweetQuote creates a link that allows the current tweet to be shared on Twitter
 */
const TweetQuote = ({ quote } : { quote : Quote }) => {
  const text = encodeURIComponent(`"${quote.Text}" - ${quote.Author}`)
  return (
    <li className="list-inline-item">
      <a id="tweet-quote" className="btn btn-primary" href={`https://twitter.com/intent/tweet?text=${text}`}><FontAwesomeIcon icon={faTwitter} /> Tweet Quote</a>
    </li>
  )
}

export default QuoteContainer
