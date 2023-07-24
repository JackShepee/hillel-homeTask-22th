const questions = [
  {
    caption: "Подія натискання на елемент називається click?",
    correctAnswer: true,
  },
  {
    caption: "Усередині розмітки не можна додати обробник події?",
    correctAnswer: false,
  },
  {
    caption:
      "Припинити спливання події можна за допомогою метода stopImmediatePropagation?",
    correctAnswer: false,
  },
  {
    caption:
      "Припинити спливання події можна за допомогою метода stopPropagation?",
    correctAnswer: true,
  },
  {
    caption: "test",
    correctAnswer: false,
  },
];

module.exports = (req, res) => {
  const userAnswers = req.body;
  let correctCount = 0;

  questions.forEach((question, index) => {
    if (question.correctAnswer === userAnswers[index]) {
      correctCount++;
    }
  });

  res.status(200).json({ correctCount });
};
