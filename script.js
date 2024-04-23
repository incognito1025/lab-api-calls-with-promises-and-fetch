//Fetch my API

const Base_URL = "https://opentdb.com/api.php?amount=10";
const form = document.querySelector("form");
const main = document.querySelector("main");

//
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    getTriviaData()
});

//fetch me json data from this Base_URL above.
function getTriviaData () {
    fetch(Base_URL) //get the URL
        .then((response) => response.json()) // then get me the response in json format
        .then(({results}) => displayTrivia(results)) // `results` is an array of objects
        .catch(() => console.error("This is an error.")) // in case something goes wrong in fetching data.
}

//make our displayTrivia function
function displayTrivia(results) {

    for (let i = 0; i < results.length; i++) {
        //console.log(results[i]);
        const article = document.createElement("article"); // creating the article tag variable
        article.classList.add("card"); //

        const category = document.createElement("h2");
        category.innerText = results[i].category;

        const q = document.createElement("p");
        q.innerText = results[i].question;

        const button = document.createElement("button");
        button.innerText = "Show Answer";
        
        const correctAnswer = document.createElement("p");
        correctAnswer.classList.add("hidden");

        article.append(category, q, button, correctAnswer);  // adding them to `main` in html, take all the others and nest them
        main.append(article)   // article will have children
    }



}



//






//js single-threaded - does one thing at a time. from up to down. 





//Intro to Promises:
//Pending 

/*
const promiseToWait = new Promise(() => {
    setTimeout(() => {
        return "I promise to wait";
    })
});

function getPokemonByID(id) {
  const errorSection = document.querySelector(".error") || null;
  if (errorSection) {
    errorSection.remove();
  }
  fetch(BASE_URL + "/" + id) // results in a Promise
    .then((x) => x.json()) // results in a Promise
    .then((res) => {
      // results in an OBJECT
      if (!pokeDex[id]) {
        const article = document.createElement("article");
        console.log(res);
        article.innerHTML = `<img src=${res.sprites.front_default} alt=${res.name} />
      <h2>${res.name} (#${res.order})</h2>`;

        document.querySelector(".pokemon").append(article);
        pokeDex[id] = true;
      } else {
        const seenBefore = document.createElement("section");
        seenBefore.setAttribute("class", "error");

        seenBefore.innerHTML = `<p>There was an error!</p>
    <p class="message">You've already found this pokemon!</p>`;

        document.querySelector("main").append(seenBefore);
      }
    })
    .catch((error) => {
      console.log("error triggered", error);
      const errorSection = document.createElement("section");
      errorSection.setAttribute("class", "error");

      errorSection.innerHTML = `<p>There was an error!</p>
    <p class="message">${error}</p>`;

      document.querySelector("main").append(errorSection);
    });
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // const input = document.getElementById("pokemon-id").value;

  console.log(e.target.id.value);
  getPokemonByID(e.target.id.value);
  e.target.id.value = "";
});



/*
const input = document.getElementById("pokemon-id");
let list = [];

fetch(BASE_URL).then((response)=> {
    //console.log(fetch(BASE_URL));
    //console.log(response);
   return response.json();  //also returns a promise
}) .then((nextResponse) => {
    //console.log(nextResponse);
   list = nextResponse.results;
    //console.log(list);
})

//console.log(fetch(BASE_URL));


// https://pokeapi.co/api/v2/

*/








/*
What is a web API?
Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in its place.
//A web API (Application Programming Interface) is a set of rules and protocols that allows one software application to interact with another over the web. It defines the methods and data formats that applications can use to request and exchange information. Web APIs are commonly used to enable communication between different systems or services, allowing them to share data and functionality. ex. fetch - can be used to communicate with another system. 

//What does it mean for a server to be a JSON web API?
JSON is an acronym for JavaScript Object Notation. 
Accept and returns data in the JSON format. Format for JSON is a key which is a string . json.stringify() and json.parse()

//What does the fetch() function do?
Fetch() is an API that's built into javascript to return data. .fetch()retrieves data from places on the Internet. To make a request from the client side. 
The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available

Look at the following code, which uses the fetch() function. Describe each line of code as best as you can.

fetch(YOUR_URL)
  .then((response) => response.json())
  .then(console.log)
  .catch(console.log);

fetch(YOUR_URL) // This line initiates an HTTP request to by YOUR_URL. The fetch() function returns a Promise that resolves to a Response object representing the response to the request.

  .then((response) => response.json()) // This line chains a .then() method to the Promise returned by fetch(). It takes a callback function as an argument, which receives the Response object as its parameter. Inside the callback function, response.json() is called to parse the response body as JSON. This method also returns a Promise that resolves to the parsed JSON data.

  .then(console.log)  //This line chains another .then() method to the Promise returned by the previous .then(). It passes console.log as the callback function, which will be called with the resolved value of the Promise, in this case, the parsed JSON data. This effectively logs the JSON data to the console.

  .catch(console.log);  //This line chains a .catch() method to the Promise chain to handle any errors that occur during the request or parsing of the response. It passes console.log as the callback function, which will be called with the error object if an error occurs. This allows for logging any errors to the console.

  syncronious - js executes from top to bottom. flow of code in a sequence

  asyncrinous - When working with API codes - you're working with fetch(). 



  Take a look at the front page of the PokeAPI. What URL should you request data for a Pokemon named "Ditto"?
  "https://pokeapi.co/api/v2/pokemon";

Use just the fetch() function to request that same URL. What shows up in the console? Why? Was the API call made?
console.log(fetch(BASE_URL));
It just returns the promise.

Try typing that URL into your location bar. Do you receive any data back? Why or why not?
I get a pretty count.  Here's a sample of the array of objects:
{"count":1302,"next":"https://pokeapi.co/api/v2/pokemon?offset=20&limit=20","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},

Use just the fetch() function to request that same URL. What shows up in the console? Why? Was the API call made?

Use the fetch() function with .then() that converts the response to JSON. What shows up in the console? Why? Was the API call made?

Use the fetch() function with .then() that converts the response to JSON and a .then() to log out the response. What shows up in the console? Why? Was the API call made?

*/
