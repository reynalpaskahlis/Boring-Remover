let words = [];
let currentWord = "";
let score = 0;
let currentIndex = 0;

fetch("words.json")
  .then((res) => res.json())
  .then((data) => {
    words = data;
    newGame();
  });

function newGame() {
  if (currentIndex >= words.length) {
    document.getElementById("game").innerText = "🎉 Game Over!";
    document.getElementById("message").innerText = `Your final score: ${score} out of ${words.length}`;
    document.getElementById("guessInput").style.display = "none";
    document.querySelector("button").style.display = "none";
    return;
  }

  currentWord = words[currentIndex];
  document.getElementById("game").innerText = `_ `.repeat(currentWord.length);
  document.getElementById("message").innerText = "";
  document.getElementById("guessInput").value = "";
}

function submitGuess() {
  const guess = document.getElementById("guessInput").value.trim().toLowerCase();
  const correct = guess === currentWord.toLowerCase();

  if (correct) {
    score++;
    document.getElementById("message").innerText = "✅ Correct!";
  } else {
    document.getElementById("message").innerText = `❌ Wrong. The word was: ${currentWord}`;
  }

  currentIndex++;
  setTimeout(newGame, 1500);
}
