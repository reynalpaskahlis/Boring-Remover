
fetch("crossword.json")
  .then(res => res.json())
  .then(data => {
    const cluesContainer = document.getElementById("clues");
    data.forEach((entry, index) => {
      const div = document.createElement("div");
      div.className = "clue";
      div.innerHTML = `<strong>Clue ${index + 1}:</strong> ${entry.clue}<br>
        <input type="text" data-answer="${entry.answer}" placeholder="Your answer">`;
      cluesContainer.appendChild(div);
    });
  });

function checkAnswers() {
  const inputs = document.querySelectorAll("input");
  let correct = 0;
  inputs.forEach(input => {
    if (input.value.trim().toLowerCase() === input.dataset.answer.toLowerCase()) {
      input.style.border = "2px solid green";
      correct++;
    } else {
      input.style.border = "2px solid red";
    }
  });
  document.getElementById("result").innerText = `You got ${correct} out of ${inputs.length} correct!`;
}
