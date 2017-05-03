// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var viewedquotes =[]; //after randomy selected quotes - because quotes are array
var screenquote = ''; //quote in screen - 1 quote 

//array for quotes-citations-source-year-tag- (objects in it) -- change its bg color
//tag: credtit 
//backgorund color: credit2

var quotes = [
{

	quote: "Talk is cheap. Show me the code.",
	source: "Linus Torvalds",
	citation: "",
	year: 2000,
	color: "lightblue",
	tag: "programming"
},


 {
	quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
	source: "Harold Abelson",
	citation: "",
	year: 1984,
	color: "red",
	tag: "programming"

 },

 {
	quote: "I'm not a great programmer; I'm just a good programmer with great habits.",
	source: "Kent Beck",
	citation: "Smalltalk, Outside The Ivory Tower",
	year: 2012,
	color: "orange",
	tag: "programming"

 },

  {
	quote: "Give a man a program, frustrate him for a day.Teach a man to program, frustrate him for a lifetime.",
	source: "Waseem Latif",
	citation: "",
	year: "",
	color: "blue",
	tag: "coding"

 },


  {
	quote: "Walking on the trees and developing software from a specification are easy if both are frozen.",
	source: "Edward V Berard",
	citation: "",
	year: "",
	color: "green",
	tag: "developing"

 },

  {
	quote: "Good design adds value faster than it adds cost.",
	source: "Thomas C. Gale",
	citation: "",
	year: "",
	color: "pink",
	tag: "design"

 },


  {
	quote: "Programming isn't about what you know; it's about what you can figure out.",
	source: "Chris Pine",
	citation: "Learn To Program",
	year: "",
	color:"purple",
	tag: "programming"

 },

];


// randomly pick a quote (object from quotes array) and store it in getRandomQuote
function getRandomQuote() {
	//credit3 
	for(var i = 0;i < quotes.length;i++){
	var randomquote = Math.floor(Math.random() * quotes.length);
	var splicedquote = quotes.splice(randomquote, 1)[0];
	viewedquotes.push(splicedquote);
	return splicedquote;
}
       quotes = viewedquotes;
	   viewedquotes = [];
}



// print the picked quotes from array (object)
function printQuote() {
	var quotes = getRandomQuote();
	screenquote ='<p class="quote">' + quotes.quote + '</p>';
	screenquote  += '<p class="source">' + quotes.source;

	//becasue not every citation has year and citation
	if ( quotes.citation ) {
		screenquote += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		screenquote += '';
	}
	if (quotes.year) {
		screenquote += '<span class="year">' + quotes.year + '</span></p>';	
	} else {
		screenquote += '';
	}
	if ( quotes.tag ) {
		screenquote += '<h4>' + quotes.tag + '</h4>';
	} else {
		screenquote += '';
	}
	if ( quotes.color ) {
		//change the body color depends on the quote.color
		document.body.style.backgroundColor = quotes.color;
	}
	print(screenquote); 
	
}



function print(quote) {
	var wrtdiv = document.getElementById('quote-box'); //writes in project rules
	wrtdiv.innerHTML = quote;
	

}





