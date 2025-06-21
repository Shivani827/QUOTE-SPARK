
const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text:"It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
    { text: "Believe in yourself and all that you are.", author: "Christian Larson" },
    { text: "Every day is a new beginning.", author: "Rumi" },
    { text: "You are enough.", author: "Anonymous" }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const dotsContainer = document.getElementById('dotsContainer');
let currentQuoteIndex=0;
const numberOfDots = 3;
for (let i = 0; i < numberOfDots; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
}
function updateActiveDot(quoteIndex) {
  const allDots = document.querySelectorAll('.dot');
  const quotesPerDot = Math.ceil(quotes.length / allDots.length); // 2 quotes per dot
  const activeDotIndex = Math.floor(quoteIndex / quotesPerDot);

  allDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === activeDotIndex);
  });
}


function getRandomQuote() {
  let randomIndex;
  do {
      randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === currentQuoteIndex && quotes.length > 1);
  
  currentQuoteIndex = randomIndex;
  return quotes[randomIndex];
}

function displayNewQuote() {
  const newQuote = getRandomQuote();
  quoteElement.innerText = `"${newQuote.text}"`;
  authorElement.innerText = `— ${newQuote.author}`;
  updateActiveDot(currentQuoteIndex);
}

newQuoteBtn.addEventListener('click', displayNewQuote);

quoteElement.innerText = `"${quotes[0].text}"`;
authorElement.innerText = `— ${quotes[0].author}`;

