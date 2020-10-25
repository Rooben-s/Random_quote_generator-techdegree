/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Student Name : Rooben Subramanen
******************************************/


/*** 
 * `quotes` array 
***/

var quotes = [
{
  quote : "The future belongs to those who believe in the beauty of their dreams.",
  source : " Eleanor Roosevelt",
  citation : "Book",
  year : "1950"
},
{
  quote : "It is during our darkest moments that we must focus to see the light.",
  source : " Aristotle",
  citation : "Magazine",
  year : "321 BC"
},
{
  quote : "Life is what happens when you're busy making other plans.",
  source : " John Lennon",
  citation : "Newspaper",
  year : "1970"
},
{
  quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  source : " Steve Jobs",
  citation : "Online",
  year : "2004"
},
{
  quote : "The way to get started is to quit talking and begin doing.",
  source : " Walt Disney",
  citation : "Movie",
  year : "1950"
},
{
  quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  source : " Nelson Mandela",
  citation : "Radio",
  year : "2010"
},
];



var colors = [
  {
    background : "#009378",
  },
  {
    background : "#658525",
  },
  {
    background : "#555273",
  },
  {
    background : "#032535",
  },
  {
    background : "#1c7293",
  },
  {
    background : "#4a4de7",
  }
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomQuote = Math.floor( Math.random() * quotes.length );
  return quotes[randomQuote];
}

function getRandomColor() {
  let randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}



/***
 * `printQuote` function
***/


function printQuote() {
  let currentQuote = getRandomQuote();
  let currentColor = getRandomColor();
  let html = " <p class='quote'> " + currentQuote.quote + "</p>" ;
  html += "<p class='source'>" + currentQuote.source ;


    if ("citation" in currentQuote) {
      html += "<span class='citation'> " + currentQuote.citation + "</span>";
}


    if ("year" in currentQuote) {
    html += "<span class='year'> " + currentQuote.year + "</span>";
}
 
    document.getElementById("quote-box").innerHTML = html;
    document.body.style.background = currentColor.background;


}


printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
