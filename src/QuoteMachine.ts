import type { Quote } from './Quote'

/**
 * QuoteMachine is an object that can generate quotes from a pool of quotes.
 * The quotes must be an array of Quote items.
 * 
 * This project does not use QuoteMachine but rather sources its quotes from the quotable API.
 * This can be of use to some other project sometime.
 */
export class QuoteMachine {
  quotes: Array<Quote>

  constructor(pool: Array<Quote>) {
    this.quotes = [...pool]
  }

  /**
   * generates a random quote from its pool
   */
  generate(): Quote {
    // rng generates a random number from 0 to len(quotes)
    const rng = () => Math.floor(Math.random() * this.quotes.length)
    return this.quotes[rng()]
  }
}
