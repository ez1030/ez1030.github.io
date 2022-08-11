/* .js files add interaction to your website */



/*Fact Button*/
var factList = [
  "Depression alone costs the nation about $210.5 billion annually.", 
  "Many people suffer from more than one mental disorder at a given time. In particular, depressive illnesses tend to co-occur with substance abuse and anxiety disorders.",
  "The most common mental illnesses in the U.S. are anxiety disorders, which affect 40 million adults (18.1% of the population).", 
  "Half of all lifetime mental illness begins by age 14, and 75% by age 24.", 
  "More than 70% of youth in the juvenile justice system have a diagnosed mental illness."
];


var factBtn = document.getElementById("factBtn");
var fact = document.getElementById("fact");

if (factBtn) {
factBtn.addEventListener("click", displayFact);
}

function displayFact () {
  fact.innerHTML = factList[count];
  count ++; 
  if (count == factList.length) {
    count = 0;
  }
}



/*Motivational Quote*/
var quoteList = [
  "You are not alone. You are seen. I am with you. You are not alone. — Shonda Rhimes",
  "Happiness can be found even in the darkest of times, if one only remembers to turn on the light. — Albus Dumbledore from Harry Potter and the Prisoner of Azkaban", 
  "What mental health needs is more sunlight, more candor, and more unashamed conversation. — Glenn Close",
  "Change what you can, manage what you can’t. ― Raymond McCauley"
];

var myBtn = document.getElementById("myBtn");
var quote = document.getElementById("quote");
var count = 0;

if (myBtn) {
myBtn.addEventListener("click", displayQuote);
}

function displayQuote() {
  quote.innerHTML = quoteList[count];
  count ++; //adds 1 to count
  if (count == quoteList.length) {
    count = 0;
  }
}
