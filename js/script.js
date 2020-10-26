/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Student Name : Rooben Subramanen
******************************************/


/*** 
 * `quotes` array 
***/
// creates an array of objects to store quote related information
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



// creates an array of objects to store background color information
// I didn't want to randomize the background color because it can sometimes lead to hard to read quotes
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
// generates a random number, assigns it to a variable, then uses it to return a random object from the quotes array
function getRandomQuote() {
  let randomQuote = Math.floor( Math.random() * quotes.length );
  return quotes[randomQuote];
}



// generates a random number, assigns it to a variable, then uses it to return a random object from the colors array
function getRandomColor() {
  let randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}



/***
 * `printQuote` function
***/

function printQuote() {

      // creates the currentQuote variable and sets the value to the random object that is returned when the getRandomQuote function is called
    // creates the currentColor variable and sets the value to the random object that is returned when the getRandomColor function is called
    // creates the html variable and uses the currentQuote variable along with key values to build a string
  let currentQuote = getRandomQuote();
  let currentColor = getRandomColor();
  let html = " <p class='quote'> " + currentQuote.quote + "</p>" ;
  html += "<p class='source'>" + currentQuote.source ;


      // tests to see if the citation property is present in the currentQuote and if so, adds it to the string
    if ("citation" in currentQuote) {
      html += "<span class='citation'> " + currentQuote.citation + "</span>";
}

    // tests to see if the year property is present in the currentQuote and if so, adds it to the string
    if ("year" in currentQuote) {
    html += "<span class='year'> " + currentQuote.year + "</span>";
}




     // writes the info from the html variable to the div with the quote-box id
    // uses the currentColor variable to change the background color
    document.getElementById("quote-box").innerHTML = html;
    document.body.style.background = currentColor.background;
 


}


// runs the printQuote function upon initial page load
printQuote(); 



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('load-quote').addEventListener("click", printQuote, false);

