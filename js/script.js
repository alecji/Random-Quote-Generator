/*
This program generates a random quote along with the source, citation and year.
It then displays the results on the user's screen randomly.
*/

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Global Variables
var randNum;
var message = '';

// An array that holds data for quotes. Each object contains quote, source, citation and year properties.
var quotes = [
  {
    quote: 'Do or do not. There is no try.',
    source: 'Yoda',
    citation: 'Star Wars: The Empire Strikes Back',
    year: '1980'
  },
  {
    quote: 'Realize deeply that the present moment is all you will ever have.',
    source: 'Eckhart Tolle',
    citation: 'The Power of Now',
    year: '1997'
  },
  {
    quote: 'Do you understand the words that are comin\' out outta my mouth?',
    source: 'Chris Tucker',
    citation: 'Rush Hour',
    year: '1998'
  },
  {
    quote: 'Hodor',
    source: 'Hodor',
    citation: 'Game of Thrones',
    year: '2016'
  },
  {
    quote: 'I am the one who knocks.',
    source: 'Walter White',
    citation: 'Breaking Bad',
    year: '2011'
  },
  {
    quote: 'Clear Eyes, Full Hearts, Can\'t Lose' ,
    source: 'Coach Taylor',
    citation: 'Friday Night Lights',
    year: '2011'
},
{
    quote: 'But I don\'t think of you.',
    source: 'Howard Roark',
    citation: 'The Fountainhead',
    year: '1943'
},
{
    quote: 'Just keep swimming.',
    source: 'Dory',
    citation: 'Finding Nemo',
    year: '2003'
},
{
    quote: 'High Five!',
    source: 'Borat Sagdiyev',
    citation: 'Borat',
    year: '2006'
},
{
    quote: 'If you ain\'t first, you\'re last.',
    source: 'Ricky Bobby',
    citation: 'Talladega Nights',
    year: '2006'
}
];

//generates a random number from 0 to the length of the quotes array and stores in in the randNum variable.
function getRandomQuote(){
    randNum = [Math.floor(Math.random() * quotes.length)];
        return randNum;
	}

//prints the random quote to the page 
function printQuote (message){
  message += '<p class="quote">' + quotes[getRandomQuote()].quote + '</p>'; // Uses the getRandomQuote() function to generate a random quote.
  message += '<p class="source">' + quotes[randNum].source;
  if (quotes.citation !== '' ){
  message += '<span class="citation">' + quotes[randNum].citation + '</span>';
  }
  if (quotes.year !== ''){
    message += '<span class="year">' + quotes[randNum].year + '</span></p>'
  } else {
    message += '</p>'
  }
 document.getElementById('quote-box').innerHTML = message;

}
//calls the printQuote function
printQuote();
