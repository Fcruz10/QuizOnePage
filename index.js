const questions = [
  {
    question: "What is the purpose of the 'console.log()' command in JavaScript?",
    answers: [
      "Display an error message",
      "Print data to the console",
      "Create a variable",
    ],
    correct: 1,
  },
  {
    question: "What is the function of the '===' operator in comparisons in JavaScript?",
    answers: [
      "Strict comparison of values and types",
      "Comparison of values regardless of type",
      "Assignment of values",
    ],
    correct: 0,
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answers: [
      "both of the above options are correct",
      "let myVar;",
      "const myVar = 10;",
    ],
    correct: 0,
  },
  {
    question: "What is a function in JavaScript?",
    answers: [
      "A data type",
      "A reusable block of code",
      "A global variable",
    ],
    correct: 1,
  },
  {
    question: "What is the difference between 'let' and 'const' in variable declaration?",
    answers: [
      "None, they are synonyms",
      "let is used for constant values, const for variables",
      "let allows reassignment, const creates immutable variables",
    ],
    correct: 2,
  },
  {
    question: "What is the DOM in JavaScript?",
    answers: [
      "An encryption method",
      "An object model for manipulating HTML documents",
      "A programming language",
    ],
    correct: 1,
  },
  {
    question: "How do you iterate over the elements of an array in JavaScript?",
    answers: [
      "Using loops like 'for' or 'forEach'",
      "Using the 'if-else' structure",
      "With the 'switch' statement",
    ],
    correct: 0,
  },
  {
    question: "What is JSON in JavaScript?",
    answers: [
      "A text formatting method",
      "A styling language",
      "A lightweight, interchangeable data format",
    ],
    correct: 2,
  },
  {
    question: "What is the difference between 'null' and 'undefined' in JavaScript?",
    answers: [
      "They are the same, used interchangeably",
      "'null' represents the absence of a value, 'undefined' is explicitly assigned",
      "Both represent empty values",
    ],
    correct: 1,
  },
  {
    question: "How do you add an event to an HTML element using JavaScript?",
    answers: [
      "Only with CSS",
      "Using the 'event' attribute",
      "Through the 'addEventListener' method",
    ],
    correct: 2,
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corrects = new Set()
const totalQuestions = questions.length
const showTotal = document.querySelector('#hits span')
showTotal.textContent = corrects.size + ' de ' + totalQuestions

// loop ou laço de repetição
for (const item of questions) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.question

  for (let answer of item.answers) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = answer
    dt.querySelector('input').setAttribute('name', 'Question -' + questions.indexOf(item))
    dt.querySelector('input').value = item.answers.indexOf(answer)
    dt.querySelector('input').onchange = (event) => {
      const isCorrect = event.target.value == item.correct

      corrects.delete(item)
      if (isCorrect) {
        corrects.add(item)
      }

      showTotal.textContent = corrects.size + ' de ' + totalQuestions
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}