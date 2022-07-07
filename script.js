const APICallString = "https://api.adviceslip.com/advice";
let quote = "";
let quoteID;

let getQuotes = document.querySelector("#quote");
let getQuoteID = document.querySelector("#quoteID");
let btn = document.querySelector("#btn");

function changeQuote(myQuote, myQuoteID) {
  getQuotes.textContent = myQuote;
  getQuoteID.textContent = myQuoteID;
}

function getQuote() {
  fetch(APICallString)
    .then((response) => response.json())
    .then((data) => {
      quote = JSON.stringify(data.slip.advice);
      quoteID = data.slip.id;
      console.log(quote);
      console.log(quoteID);
      changeQuote(quote, quoteID);
    })
    .catch((error) => console.log(error));
}

getQuote();

btn.addEventListener("click", function () {
  getQuote();
});
