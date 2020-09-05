// Quote is an interface that has an Author and a Text, but may have an optional Context.
// The Text is the text of the quote.
// The Author is the person who said the Quote.
// The Context contains details where the Quote may be from;
// for example, as an excerpt from a book.
export interface Quote {
  readonly Text: string;
  readonly Author: string;
  readonly Context?: string;
}

// DefaultQuotes is a default array of Quotes
export const DefaultQuotes: Array<Quote> = [
  {
    Text: `Mona Lisa, Mona Lisa, men have named you
You're so like the lady with the mystic smile
Is it only 'cause you're lonely they have blamed you?
For that Mona Lisa strangeness in your smile?`,
    Author: `Nat King Cole`,
    Context: `from his song Mona Lisa`
  },
  {
    Text: `A learning experience is one of those things that say, "You know that thing you just did? Don't do that."`,
    Author: `Douglas Adams`,
    Context: `Interview in The Daily Nexus (5 April 2000), reprinted in The Salmon of Doubt`
  },
  {
    Text: `The world is a thing of utter inordinate complexity and richness and strangeness that is absolutely awesome. I mean the idea that such complexity can arise not only out of such simplicity, but probably absolutely out of nothing, is the most fabulous extraordinary idea. And once you get some kind of inkling of how that might have happened, it's just wonderful. And … the opportunity to spend 70 or 80 years of your life in such a universe is time well spent as far as I am concerned.`,
    Author: `Douglas Adams`,
    Context: `Response to the question "What is it about science that really gets your blood running?" — as quoted in Richard Dawkins in his eulogy for Adams`
  },
  {
    Text: `Piety requires us to honor truth above our friends.`,
    Author: `Aristotle`,
    Context: `Book I, 1096a.16`
  },
  {
    Text: `Develop the mind of equilibrium. You will always be getting praise and blame, but do not let either affect the poise of the mind: follow the calmness, the absence of pride.`,
    Author: `Gautama Buddha`,
    Context: `Sutta Nipāta`
  },
  {
    Text: `To study and not think is a waste. To think and not study is dangerous.`,
    Author: `Confucius`,
    Context: `The Analects, Chapter II`
  },
  {
    Text: `When I walk along with two others, they may serve me as my teachers. I will select their good qualities and follow them, their bad qualities and avoid them.`,
    Author: `Confucius`,
    Context: `The Analects, Chapter VII`
  },
  {
    Text: `The superior man examines his heart, that there may be nothing wrong there, and that he may have no cause for dissatisfaction with himself. That wherein the superior man cannot be equaled is simply this — his work which other men cannot see.`,
    Author: `Confucius`,
    Context: `The Doctrine of the Mean`
  },
  {
    Text: `Things have their root and their branches. Affairs have their end and their beginning. To know what is first and what is last will lead near to what is taught in the Great Learning.`,
    Author: `Confucius`,
    Context: `The Great Learning`
  },
  {
    Text: `Peace cannot be kept by force. It can only be achieved by understanding. You cannot subjugate a nation forcibly unless you wipe out every man, woman, and child. Unless you wish to use such drastic measures, you must find a way of settling your disputes without resort to arms.`,
    Author: `Albert Einstein`,
    Context: `From a speech to the New History Society (14 December 1930)`
  },
  {
    Text: `Striving for peace and preparing for war are incompatible with each other, and in our time more so than ever.`,
    Author: `Albert Einstein`,
    Context: `From a 16 June 1950 U.N. radio interview`
  },
  {
    Text: `Ye shall know the truth, and the truth shall make you free.`,
    Author: `Jesus`,
    Context: `John 8:32 (KJV)`
  },
  {
    Text: `I am not interested in power for power's sake, but I'm interested in power that is moral, that is right and that is good.`,
    Author: `Martin Luther King Jr.`,
    Context: `As quoted in The Civil Sphere (2006) by Jeffrey C. Alexander, p. 388`
  },
  {
    Text: `It is a trite yet urgently true observation that if America is to remain a first-class nation, it cannot have second-class citizens.`,
    Author: `Martin Luther King Jr.`,
    Context: `The Rising Tide of Racial Consciousness (1960)`
  },
  {
    Text: `Eloquence may strike the ear, but the language of poverty strikes the heart; the first may charm like music, but the second alarms like a knell.`,
    Author: `Thomas Paine`,
    Context: `Case of the Excise Officers (1772)`
  },
  {
    Text: `Where knowledge is a duty, ignorance is a crime.`,
    Author: `Thomas Paine`,
    Context: `Public Good (December 1780)`
  },
  {
    Text: `We fight not to enslave, but to set a country free, and to make room upon the earth for honest men to live in.`,
    Author: `Thomas Paine`,
    Context: `The American Crisis No. IV.`
  },
  {
    Text: `The worst sin towards our fellow creatures is not to hate them, but to be indifferent to them: that's the essence of inhumanity.`,
    Author: `George Bernard Shaw`,
    Context: `The Devil's Disciple, Act II (1901)`
  },
  {
    Text: `Life is not meant to be easy, my child but take courage: it can be delightful.`,
    Author: `George Bernard Shaw`,
    Context: `Back to Methuselah (1921)`
  },
  {
    Text: `Man is free at the instant he wants to be.`,
    Author: `Voltaire`,
    Context: `Brutus, act II, scene I (1730)`
  }
]
