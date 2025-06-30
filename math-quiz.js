
fetch("quiz.json")
  .then(res => res.json())
  .then(quiz => {
    let current = 0;
    let score = 0;
    const quizContainer = document.getElementById("quiz");
    const scoreDisplay = document.getElementById("score");

    function loadQuestion() {
      quizContainer.innerHTML = "";
      const q = quiz[current];
      const qDiv = document.createElement("div");
      qDiv.className = "question";
      qDiv.innerHTML = `<h3>${q.question}</h3>`;
      q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => {
          if (opt === q.answer) score++;
          current++;
          if (current < quiz.length) {
            loadQuestion();
          } else {
            quizContainer.innerHTML = "";
            scoreDisplay.textContent = `You got ${score} out of ${quiz.length} correct.`;
          }
        };
        qDiv.appendChild(btn);
      });
      quizContainer.appendChild(qDiv);
    }

    loadQuestion();
  });
