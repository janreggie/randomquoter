import React, { useState } from 'react'
import { Quote } from './Quote'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * QuoteContainer is the React component used to display and generate quotes.
 */
const QuoteContainer = () => {

  const [quote, setQuote] = useState<Quote>({
    Text: "Press New Quote to generate",
    Author: "Press New Quote"
  })

  const generateQuote = async () => {

    setQuote({
      Text: "Fetching data...",
      Author: "Fetching data..."
    })

    // See https://github.com/lukePeavey/quotable for response format.
    type Response = {
      content: string,
      author: string
    }

    try {
      const response : Response = await fetch('https://api.quotable.io/random').then(response => response.json())
      setQuote({
        Text: response.content,
        Author: response.author
      })

    } catch {
      setQuote({
        Text: "Could not fetch quote. Try again.",
        Author: "Press New Quote"
      })
    }

  }

  return (
    <div id="quote-box-container" style={{ minHeight: "50vh" }}>  {/* container needed to ensure card doesn't occupy entire height */}
      <div className="card border-primary mx-auto bg-light" id="quote-box">
        <div className="card-body h-50" >
          <QuoteBox quote={quote} />
          <div className="list-inline">
            <NewQuote generator={generateQuote} />
            <TweetQuote quote={quote} />
          </div>
        </div>
      </div>
    </div >
  )
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
