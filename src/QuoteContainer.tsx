import React from 'react'
import { Quote, /*DefaultQuotes*/ } from './Quote'
//import { QuoteMachine } from './QuoteMachine'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { text } from '@fortawesome/fontawesome-svg-core';

class QuoteContainer extends React.Component {
  //quoteMachine: QuoteMachine
  state: { quote: Quote }

  constructor(props: object) {
    super(props)
    //this.quoteMachine = new QuoteMachine(DefaultQuotes)
    this.state = {
      //quote: this.quoteMachine.generate()
      quote: {
        Text: "Press New Quote to Generate",
        Author: "Press New Quote"
      }
    }
    this.generateQuote = this.generateQuote.bind(this)
  }


  generateQuote(): void {
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
    this.setState({
      quote: {
        Text: "Fetching data...",
        Author: "Fetching data..."
      }
    })
  }

  render(): JSX.Element {
    const newQuoteArgs = { generator: this.generateQuote }
    return (
      <div id="quote-box-container" style={{ minHeight: "50vh" }}>
        <div className="card border-primary mx-auto bg-light" id="quote-box">
          <div className="card-body h-50" >
            <QuoteBox {...this.state.quote} />
            <div className="list-inline">
              <NewQuote {...newQuoteArgs} />
              <TweetQuote {...this.state.quote} />
            </div>
          </div>
        </div>
      </div >
    )
  }
}

class QuoteBox extends React.Component<Quote> {
  render(): JSX.Element {
    let footerContent: JSX.Element
    if (this.props.Context) {
      footerContent = (
        <footer className="blockquote-footer" id="author-context">
          <span id="author">{this.props.Author}</span>, <cite className="text-muted" id="context">{this.props.Context}</cite>
        </footer>
      )
    } else {
      footerContent = (
        <footer className="blockquote-footer" id="author-context">
          <span id="author">{this.props.Author}</span>
        </footer>
      )
    }

    return (
      <blockquote className="blockquote" id="quote">
        <p id="text">{this.props.Text}</p>
        {footerContent}
      </blockquote>
    )
  }
}

class NewQuote extends React.Component {
  generator: () => {}

  constructor(props: { generator: () => {} }) {
    super(props)
    this.generator = props.generator
  }

  render(): JSX.Element {
    return (
      <li className="list-inline-item">
        <button id="new-quote" className="list-inline-item btn btn-primary" onClick={this.generator}>New Quote</button>
      </li>
    )
  }
}

class TweetQuote extends React.Component<Quote> {
  render(): JSX.Element {
    let text = encodeURIComponent(`"${this.props.Text}" - ${this.props.Author}`)
    return (
      <li className="list-inline-item">
        <a id="tweet-quote" className="btn btn-primary" href={`https://twitter.com/intent/tweet?text=${text}`}><FontAwesomeIcon icon={faTwitter} /> Tweet Quote</a>
      </li>
    )
  }
}

export default QuoteContainer
