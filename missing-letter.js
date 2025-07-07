let score = 0;
let words = [];
let currentWord = "";
let displayWord = [];

fetch("words.json")
  .then((res) => res.json())
  .then((data) => {
    words = data;
    newGame();
  });

function newGame() {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord = words[randomIndex];
  displayWord = currentWord.split("").map((char, i) => (i % 2 === 0 ? "_" : char));
  document.getElementById("game").innerText = displayWord.join(" ");
  document.getElementById("message").innerText = "";
}

function submitGuess() {
  const guess = document.getElementById("guessInput").value.toLowerCase();
  if (guess === currentWord.toLowerCase()) {
    score++;
    document.getElementById("message").innerText = `Correct! You’ve completed ${score} word(s).`;
    setTimeout(newGame, 2000);
  } else {
    document.getElementById("message").innerText = "Incorrect, try again.";
  }
  document.getElementById("guessInput").value = "";
}

  }
  document.getElementById("game").innerText = displayWord.join(" ");
  document.getElementById("message").innerText = correct ? "Good guess!" : "Try again.";
  document.getElementById("guessInput").value = "";
  if (!displayWord.includes("_")) {
    document.getElementById("message").innerText = "You completed the word! Starting a new one...";
   score++;
    document.getElementById("message").innerText += ` You have completed ${score} word(s).`;
    setTimeout(newGame, 2000);
  }
}
