async function fetchQuestions() {
  const response = await fetch("server/questions");
  const data = await response.json();

  function checkAllAnswersSelected() {
    const answerGroups = document.querySelectorAll(".answer-group");
    let allAnswered = true;

    answerGroups.forEach((group) => {
      const selected = group.querySelector("input:checked");
      if (!selected) {
        allAnswered = false;
      }
    });

    if (allAnswered) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", "true");
    }
  }

  const questionsDiv = document.getElementById("questions");
  data.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.innerHTML = `
    <p>${question.caption}</p>
    <div class="answer-group">
        Так: <input type="radio" name="question${index}" value="true">
        Ні: <input type="radio" name="question${index}" value="false">
    </div>`;
    questionsDiv.appendChild(questionElement);
  });

  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", checkAllAnswersSelected);
  });
}

async function submitAnswers() {
  const answers = [];
  for (let i = 0; i < 4; i++) {
    const value = document.querySelector(
      `input[name="question${i}"]:checked`
    ).value;
    answers.push(value === "true");
  }

  const response = await fetch("server/answers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(answers),
  });

  const result = await response.json();
  alert(`Ви відповіли правильно на ${result.correctCount} питань`);
}

fetchQuestions();
