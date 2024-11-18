// Sample questions. DONT touch this data
const questions = [
  {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2,
  },
  {
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0,
  },
  {
    text: "What does HTML stand for?",
    options: [
      "Hyperlink and Text Markup Language",
      "High Technology Modern Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 2,
  },
  {
    text: "What does CSS stand for?",
    options: [
      "Cascading Stylesheets",
      "Cascading Styling Styles",
      "Cascading Sheets for Stylings",
      "Cascaded Stylesheets",
    ],
    correct: 0,
  },
  {
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3,
  },
  {
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0,
  },
  {
    text: "What is the primary use of the Git command 'clone'?",
    options: [
      "To stage changes",
      "To copy a repository",
      "To switch to a different branch",
      "To list all the files in a repository",
    ],
    correct: 1,
  },
  {
    text: "What does API stand for in the context of programming?",
    options: [
      "Apple Pie Interface",
      "Application Programming Interface",
      "Advanced Peripheral Integration",
      "Application Process Integration",
    ],
    correct: 1,
  },
  {
    text: "Javascript is a single threaded programming language",
    options: ["True", "False"],
    correct: 0,
  },
  {
    text: "API calls in Javascript can be done using the following method",
    options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
    correct: 2,
  },
];

let questionNumber = 0;
let score = 0;

function loadQuestion() {
  const tQues = document.getElementById("question");
  tQues.textContent = questions[questionNumber].text;

  const opt = document.getElementById("answer-list");
  opt.innerHTML = "";
  const optArray = questions[questionNumber].options;

  for (let i = 0; i < optArray.length; i++) {
    const li = document.createElement("li");

    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("id", `C${i}`);
    input.setAttribute("name", "option");
    input.setAttribute("value", i);
    const label = document.createElement("label");
    label.setAttribute("for", `C${i}`);
    label.setAttribute("id", `label-${i}`);
    label.textContent = optArray[i];

    li.appendChild(input);
    li.appendChild(label);

    opt.appendChild(li);
  }

  const nextButton = document.getElementById("next");
  const submitButton = document.getElementById("submit");
  nextButton.style.display = "none";
  submitButton.style.display = "inline-block";
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
  const selectedOption = document.querySelector("input[name='option']:checked");

  const correctAnswerIndex = questions[questionNumber].correct;
  const correctLabel = document.getElementById(`label-${correctAnswerIndex}`);

  if (!selectedOption) {
    alert("Please select an answer.");
    return;
  }

  correctLabel.style.backgroundColor = "green";
  correctLabel.style.color = "white";

  if (parseInt(selectedOption.value) === correctAnswerIndex) {
    score += 1;
  }

  submitButton.style.display = "none";
  const nextButton = document.getElementById("next");
  nextButton.style.display = "inline-block";

  if (questionNumber === questions.length - 1) {
    nextButton.textContent = "Finish";
    nextButton.addEventListener("click", () => {
      alert(
        `Quiz completed! Your score is ${score} out of ${questions.length}.`
      );

      questionNumber = 0;
      score = 0;
      loadQuestion();
    });
  }
});

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", () => {
  questionNumber += 1;

  if (questionNumber < questions.length) {
    loadQuestion();
  }
});

// Load the first question on startup
loadQuestion();
