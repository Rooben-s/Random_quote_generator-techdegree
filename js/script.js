/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Student Name : Rooben Subramanen
******************************************/


/*** 
 * `quotes` array 
***/

const quotes = [
{
  quote : "The future belongs to those who believe in the beauty of their dreams.",
  source : " Eleanor Roosevelt",
  citation : "book",
  year : "1950"
},
{
  quote : "It is during our darkest moments that we must focus to see the light.",
  source : " Aristotle",
  citation : "magazine",
  year : "321 BC"
},
{
  quote : "Life is what happens when you're busy making other plans.",
  source : " John Lennon",
  citation : "newspaper",
  year : "1970"
},
{
  quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  source : " Steve Jobs",
  citation : "online",
  year : "2004"
},
{
  quote : "The way to get started is to quit talking and begin doing.",
  source : " Walt Disney",
  citation : "movie",
  year : "1950"
},
{
  quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  source : " Nelson Mandela",
  citation : "radio",
  year : "2010"
},
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  var randomNumber = Math.floor( Math.random() * quotes.length );
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

console.log(getRandomQuote())

/***
 * `printQuote` function
***/






/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);
