import React from 'react'
import { Quote, DefaultQuotes } from './Quote'
import { QuoteMachine } from './QuoteMachine'

class QuoteContainer extends React.Component {
  quoteMachine: QuoteMachine
  state: { quote: Quote }

  constructor(props: object) {
    super(props)
    this.quoteMachine = new QuoteMachine(DefaultQuotes)
    this.state = {
      quote: this.quoteMachine.generate()
    }
    this.generateQuote = this.generateQuote.bind(this)
  }

  generateQuote(): void {
    console.log("Fuck")
    this.setState({
      quote: this.quoteMachine.generate()
    })
    console.log(this.state.quote)
  }

  render(): JSX.Element {
    const newQuoteArgs = {generator: this.generateQuote}
    return (
      <div id="quote-box">
        <QuoteBox {...this.state.quote} />
        <NewQuote {...newQuoteArgs} />
        <TweetQuote {...this.state.quote} />
      </div>
    )
  }
}

class QuoteBox extends React.Component<Quote> {

  constructor(props: Quote) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <div id="quote">
        <div id="text">{this.props.Text}</div>
        <div id="author-context">
          <span id="author">{this.props.Author}</span>
          <span id="context">{this.props.Context}</span>
        </div>
      </div>
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
      <a id="new-quote" className="btn btn-primary" onClick={this.generator}>New Quote</a>
    )
  }
}

class TweetQuote extends React.Component<Quote> {
  constructor(props: Quote) {
    super(props)
  }

  render(): JSX.Element {
    let text = encodeURIComponent(`"${this.props.Text}" - ${this.props.Author}`)
    return (
      <a id="tweet-quote" className="btn btn-primary" href={`https://twitter.com/intent/tweet?text=${text}`}>Tweet Quote</a>
    )
  }
}

export default QuoteContainer
