import type { Quote } from './Quote'

// QuoteMachine is an object that can generate quotes from a pool of quotes.
// The quotes must be an array of Quote items.
class QuoteMachine {
    quotes: Array<Quote>

    constructor(pool: Array<Quote>) {
        this.quotes = [...pool]
    }

    generate(): Quote {
        // rng generates a random number from 0 to len(quotes)
        const rng = () => Math.floor(Math.random() * this.quotes.length)
        return this.quotes[rng()]
    }
}
