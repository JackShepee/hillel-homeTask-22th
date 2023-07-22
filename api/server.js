// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();

// const questions = [
//   {
//     caption: "Подія натискання на елемент називається click?",
//     correctAnswer: true,
//   },
//   {
//     caption: "Усередині розмітки не можна додати обробник події?",
//     correctAnswer: false,
//   },
//   {
//     caption:
//       "Припинити спливання події можна за допомогою метода stopImmediatePropagation?",
//     correctAnswer: false,
//   },
//   {
//     caption:
//       "Припинити спливання події можна за допомогою метода stopPropagation?",
//     correctAnswer: true,
//   },
// ];

// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.static("public"));

// app.get("/questions", (req, res) => {
//   res.json(questions);
// });

// app.post("/answers", (req, res) => {
//   const userAnswers = req.body;
//   let correctCount = 0;

//   questions.forEach((question, index) => {
//     if (question.correctAnswer === userAnswers[index]) {
//       correctCount++;
//     }
//   });

//   res.json({ correctCount });
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// module.exports = app;
