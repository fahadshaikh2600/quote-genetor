if (!localStorage.getItem("qoutes")) {
  let qoutes = [
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    {
      text: "Success is not final, failure is not fatal.",
      author: "Winston Churchill",
    },
    {
      text: "go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      text: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates",
    },
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
    },
    {
      text: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Happiness depends upon ourselves.",
      author: "Aristotle",
    },
  ];
  localStorage.setItem("qoutes", JSON.stringify(qoutes));
}
let storedQuotes = JSON.parse(localStorage.getItem("qoutes")) || [];
function getQuoteRandom() {
  const randomIndex = Math.floor(Math.random() * storedQuotes.length);
  const randomQuotes = storedQuotes[randomIndex];

  document.querySelector("#output").textContent = "-" + randomQuotes.text;
  document.querySelector("#author").textContent = "-" + randomQuotes.author;
}

function addQuote() {
  const addQuotes = document.getElementById("input-new-quotes").value;
  const addAuthor = document.getElementById("name").value;
  if (addQuotes && addAuthor) {
    storedQuotes.push({ text: addQuotes, author: addAuthor });
    localStorage.setItem("qoutes", JSON.stringify(storedQuotes));
    console.log("mm");
    alert("Quote added successfully!");
    document.getElementById("input-new-quotes") = "";
    document.getElementById("name") = "";
  } else {
    alert("please enter both the feilds");
  }
}
